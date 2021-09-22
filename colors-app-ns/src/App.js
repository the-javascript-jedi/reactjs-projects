import "./App.css";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
      {/* <Palette palette={seedColors[4]} /> */}
    </div>
  );
}
export default App;
