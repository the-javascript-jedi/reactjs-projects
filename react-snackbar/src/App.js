import "./App.css";
import Snackbar from "./Components/Snackbar";
import { useRef } from "react";
const SnackbarType = {
  success: "success",
  fail: "fail",
};
function App() {
  // Initialize a ref
  const snackbarRef = useRef(null);
  return (
    <div className="App">
      <button
        className="showSnackBar"
        onClick={() => {
          // we can access the function inside the component if the function is declared inside a useImperativeHandle object
          snackbarRef.current.show();
        }}
      >
        Show Snackbar
      </button>
      <Snackbar
        ref={snackbarRef}
        message={"Action completed"}
        type={SnackbarType.success}
      />
    </div>
  );
}

export default App;
