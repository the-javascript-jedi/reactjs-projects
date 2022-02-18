import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChangeColor from "./components/ChangeColor";
function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}
export default App;
