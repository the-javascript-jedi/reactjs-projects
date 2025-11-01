import "./App.css";
import Boxes from "./Components/Boxes";
import BoxesMobile from "./Components/BoxesMobile";
function App() {
  var boxesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      {/* <Boxes boxesData={boxesData} /> */}
      <hr />
      <BoxesMobile boxesData={boxesData} />
    </div>
  );
}

export default App;
