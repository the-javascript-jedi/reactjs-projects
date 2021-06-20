import React,{useState} from 'react';
// components
import QuestionCard from './components/QuestionCard';
// import ENUM Types
import {Difficulty,QuestionState} from './API'
// API
import {fetchQuizQuestions} from './API';
// Styles 
import {GlobalStyle,Wrapper} from './App.styles';

const TOTAL_QUESTIONS=10;
// type 
export type AnswerObject={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}
const App=()=> {
  // state
  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState<QuestionState[]>([]);
  // question number
  const [number,setNumber]=useState(0);
  // user selected options
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
  // check answer only if not gameover
  const checkAnswer=(e:React.MouseEvent<HTMLButtonElement>)=>{
    if(!gameOver){
        //users answer - get the value from the button
        const answer=e.currentTarget.value;
        // check answer against correct answer from button
        const correct=questions[number].correct_answer===answer;
        // add score if answer is correct
        if(correct) setScore(prev=>prev+1);
        // save the answer in array for user answers
        const answerObject={
          question:questions[number].question,
          answer:answer,
          correct:correct,
          correctAnswer:questions[number].correct_answer
        }
        //save the answerObject in UserAnswers object
        setUserAnswers(prev=>[...prev,answerObject]);
        console.log("userAnswers",userAnswers);
    }
  }
  const nextQuestion=()=>{
    // move the question
    const nextQuestion=number+1;
    //if question is the last question end the game
    if(nextQuestion===TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }
  }  
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>React Quiz</h1>
      {
        // display the button only at start || if we are in last question
        gameOver||userAnswers.length===TOTAL_QUESTIONS?( <button className="start" onClick={startTrivia}>
        Start
      </button>):null
      }
     {/* show score only if the game is not over */}     
      {!gameOver&&<p className="score">Score: {score}</p>}
      {/* show loading only when the loading flag is present */}
      {loading&&<p>Loading Questions...</p>}
      {/* show QuestionCard only if not game over amd not loading */}
      {
        !loading&&!gameOver&&(<QuestionCard 
          questionNr={number+1} 
          totalQuestions={TOTAL_QUESTIONS}
          //individual question and answer details are sent to the QuestionCard component when number is incremented
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
     
    </Wrapper>
    </>
    
  );
}
export default App;
