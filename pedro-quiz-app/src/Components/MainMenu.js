import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
const MainMenu = () => {
  // useContext to get the state values
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      {/* navigate to quiz page */}
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Quiz
      </button>
    </div>
  );
};

export default MainMenu;
