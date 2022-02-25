import "./App.css";
import TablePage from "./Components/TablePage/TablePage";
import FormPage from "./Components/FormPage/FormPage";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="form-container">
          <FormPage />
        </div>
        <div className="table-container">
          <TablePage />
        </div>
      </div>
    </div>
  );
}

export default App;
