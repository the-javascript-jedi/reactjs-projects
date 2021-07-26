import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IframeParent from "./components/IframeParent";
import IframeChild from "./components/IframeChild";

function App() {
  return (
    <div className="App" style={{ margin: "0px 20px" }}>
      <BrowserRouter>
        <Switch>
          <Route path="/iframe/" component={IframeParent} />
          <Route path="/iframe-child/" component={IframeChild} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
