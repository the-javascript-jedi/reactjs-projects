import React, { useContext } from "react";
import { QuizContext } from "../helpers/Context";

const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <>
      <div className="Menu">
        <div>MainScreen</div>
        <button
          onClick={() => {
            setGameState("quiz");
          }}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default MainMenu;
