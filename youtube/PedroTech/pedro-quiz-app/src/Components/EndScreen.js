import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
const EndScreen = () => {
  // useContext to get the state values
  const { score, setScore, setGameState } = useContext(QuizContext);
  // navigate to menu
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        Score:{score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};
export default EndScreen;
