import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const [usernameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginDisplayName, setLoginDisplayName] = useState("LOGGED out");

  const [loginStatus, setLoginStatus] = useState(false);
  // withCredentials indicates whether or not cross-site Access-Control requests should be made
  // XMLHttpRequest from a different domain cannot set cookie values for their own domain unless withCredentials is set to true before making the request.
  Axios.defaults.withCredentials = true;
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
        if (response.data.auth === false) {
          setLoginDisplayName(response.data.message);
          setLoginStatus(false);
        } else {
          if (response.data.auth === true) {
            setLoginDisplayName(response.data.result[0].username);
            // set the response token in local storage with text "Bearer"
            localStorage.setItem("token", response.data.token);
            setLoginStatus(true);
          }
        }
      })
      .catch(function (error) {
        console.error("error", error);
      });
  };
  // Delete user
  const logOut = () => {
    Axios.get("http://localhost:5000/logOut").then((response) => {
      console.log("response-logOut", response);
      if (response.data.success === true) {
        setLoginDisplayName("logged out");
        setLoginStatus(false);
        localStorage.removeItem("token");
      }
    });
  };
  // check if user is logged in
  useEffect(() => {
    Axios.get("http://localhost:5000/checkUserLoggedIn", {
      // JWT AccessToken
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log("response-/checkUserLoggedIn", response);
      if (response.data.auth === true) {
        setLoginDisplayName(response.data.user[0].username);
        setLoginStatus(true);
      } else {
        setLoginDisplayName("logged out");
        setLoginStatus(false);
      }
    });
  }, []);
  // Check if user is authenticated
  const checkIfUserAuthenticate = () => {
    Axios.get("http://localhost:5000/isUserAuth", {
      // JWT AccessToken
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log("response--checkIfUserAuthenticate", response);
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
          <button onClick={() => login()}>Login</button>
          <hr />
          <p>{loginDisplayName}</p>
          {/* CHeck if user is an authenticated user */}
          {loginStatus && (
            <button
              onClick={() => {
                checkIfUserAuthenticate();
              }}
            >
              Check if Authenticated
            </button>
          )}
          <hr />
          <button onClick={() => logOut()}>Logout</button>
        </div>
      </div>
    </div>
  );
}
export default App;
