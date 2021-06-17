import React from 'react'
// types
import {AnswerObject} from '../App';
type Props={
    question:string;
    answers:string[];
    //hower in the App.tsx file on the props
    callback:(e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:AnswerObject|undefined;
    questionNr:number;
    totalQuestions:number;
}
const QuestionCard:React.FC<Props> = ({question,answers,callback,userAnswer,questionNr,totalQuestions}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}></p>
            <div>
                {
                    answers.map(answer=>(
                        <div key={answer}>
                            {/* disable the button based on the user answer */}
                            {/* !!userAnswer - convert to boolean or use ternary expression to check userAnswer?true:false */}
                            <button disabled={!!userAnswer} onClick={callback} value={answer}>
                                <span dangerouslySetInnerHTML={{__html:answer}}></span>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionCard
