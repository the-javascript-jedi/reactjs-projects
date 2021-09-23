import "./App.css";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
function App() {
  // console.log("generatePalette", generatePalette(seedColors[4]));
  // console.log("seedColors[4]", seedColors[4]);
  console.log("seedColors[4]", seedColors[4]);
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}
export default App;
