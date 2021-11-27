import "./App.css";
import SearchClass from "./SearchClass/SearchClass";
import SearchFunction from "./SearchFunction/SearchFunction";
function App() {
  return (
    <div className="App">
      <div className="searchClassBased">
        <h3>Class Based Approach</h3>
        <SearchClass />
      </div>
      <hr />
      <div className="searchFunctionBased">
        <h3>Function Based Approach</h3>
        <SearchFunction />
      </div>
    </div>
  );
}

export default App;
