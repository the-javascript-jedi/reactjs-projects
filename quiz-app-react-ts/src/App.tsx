import React,{useState} from 'react';
// components
import QuestionCard from './components/QuestionCard';
// import ENUM Types
import {Difficulty,QuestionState} from './API'
// API
import {fetchQuizQuestions} from './API'
const TOTAL_QUESTIONS=10;
// type 
type AnswerObject={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}
const App=()=> {
  // state
  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState<QuestionState[]>([]);
  const [number,setNumber]=useState(0);
  const [userAnswers,setUserAnswers]=useState<AnswerObject[]>([]);
  const [score,setScore]=useState(0);
  const [gameOver,setGameOver]=useState(true);

  // console.log("fetchQuizQuestions",fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))
  const startTrivia=async()=>{
    console.log('startTrivia clicked');
    setLoading(true);
    setGameOver(false);
    // make API call
    const newQuestions=await fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    console.log("newQuestions",newQuestions);
  }

  const checkAnswer=(e:React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion=()=>{

  }  
  return (
    <div className="App">
      <h1>React Quiz</h1>
      {
        // display the button only at start || if we are in last question
        gameOver||userAnswers.length===TOTAL_QUESTIONS?( <button className="start" onClick={startTrivia}>
        Start
      </button>):null
      }
     {/* show score only if the game is not over */}     
      {!gameOver&&<p className="score">Score</p>}
      {/* show loading only when the loading flag is present */}
      {loading&&<p>Loading Questions...</p>}
      {/* show QuestionCard only if not game over amd not loading */}
      {
        !loading&&!gameOver&&(<QuestionCard 
          questionNr={number+1} 
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers?userAnswers[number]:undefined}
          callback={checkAnswer}
          />)
      }
      {/* only show next button if user answers a question and also check if we are not in the last question*/}
      {
        !gameOver && !loading && userAnswers.length===number+1 && number!==TOTAL_QUESTIONS-1 ?( <button className="next" onClick={nextQuestion}>Next Quesion</button>):null
      }
     
    </div>
  );
}
export default App;
