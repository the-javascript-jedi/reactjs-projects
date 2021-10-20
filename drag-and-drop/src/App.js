import "./App.css";
import TeamSelection from "./components/TeamSelection";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <div className="App">
      App
      <br />
      <DndProvider backend={HTML5Backend}>
        <TeamSelection />
      </DndProvider>
    </div>
  );
}
export default App;
