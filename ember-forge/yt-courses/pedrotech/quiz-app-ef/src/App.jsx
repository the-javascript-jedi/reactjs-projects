import { useState } from "react";
// import "";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./helpers/Context";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>
        <QuizContext.Provider value={{ gameState, setGameState }}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "menu" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  );
}

export default App;
