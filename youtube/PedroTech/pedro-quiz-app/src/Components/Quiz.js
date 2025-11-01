import React, { useState, useContext, useEffect } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
const Quiz = () => {
  // useContext to get the state values
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(0);
  // set the score by checking the answer
  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore((score) => {
        return score + 1;
      });
    }
    setCurrQuestion((currQuestion) => currQuestion + 1);
  };
  const finishQuiz = () => {
    //   check the answer of last quiz
    if (Questions[currQuestion].answer === optionChosen) {
      setScore((score) => {
        return score + 1;
      });
    }
    // navigate to endscreen
    setGameState("endScreen");
  };
  useEffect(() => {
    console.log("score", score);
  }, [score]);
  return (
    <div className="Quiz">
      <h1 style={{ textAlign: "center" }}>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button className="btn-options" onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button className="btn-options" onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button className="btn-options" onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button className="btn-options" onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button
          onClick={() => {
            finishQuiz();
          }}
        >
          Finish Quiz
        </button>
      ) : (
        <button
          onClick={() => {
            nextQuestion();
          }}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
