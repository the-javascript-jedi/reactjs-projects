import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [usernameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  // Register
  const register = () => {
    Axios.post("http://localhost:5000/register", {
      username: usernameReg,
      password: passwordReg,
    })
      .then((response) => {
        console.log("response-register", response);
      })
      .catch(function (error) {
        console.error("error", error);
      });
  };
  // Login Request
  const login = () => {
    Axios.post("http://localhost:5000/login", {
      username: loginUsername,
      password: loginPassword,
    })
      .then((response) => {
        console.log("response-login", response);
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      })
      .catch(function (error) {
        console.error("error", error);
      });
  };
  return (
    <div className="App">
      <div className="App">
        <div className="registration">
          <h1>Registration</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              setUserNameReg(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          {/* Register */}
          <button onClick={register}>Register</button>
        </div>
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => {
              setLoginUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password..."
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          {/* Login */}
          <button onClick={login}>Login</button>
          <hr />
          <p>{loginStatus}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
