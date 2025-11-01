import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch("http://127.0.0.1:8000/product/all")
    .then((response) => {
      console.log("response.json()", response.json());
    })
    .catch((error) => {
      console.log("error", error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
