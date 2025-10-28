import React from "react";
import { Questions } from "../helpers/QuestionBank";
import { useState } from "react";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(1);
  const [optionChosen, setOptionChosen] = useState("");
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          onClick={() => {
            setOptionChosen("A");
          }}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setOptionChosen("B");
          }}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setOptionChosen("C");
          }}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setOptionChosen("D");
          }}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      <button>Next Question</button>
    </div>
  );
};

export default Quiz;
