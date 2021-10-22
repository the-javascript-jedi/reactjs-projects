import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breakout from "./Games/Breakout";
import "./App.css";
function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/breakout">About</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <h1>Users</h1>
            </Route>
            <Route path="/breakout">
              <h1>Home</h1>
              <Breakout />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
