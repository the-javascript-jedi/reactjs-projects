import React from 'react'
// types
import {AnswerObject} from '../App';
//styles
import {Wrapper,ButtonWrapper} from './QuestionCard.styles'

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
        <Wrapper>
            <p className="number">
                Question: {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}></p>
            <div>
                {
                    answers.map(answer=>(
                        <ButtonWrapper key={answer}
                        // we pass the props to style components and based on the passed props style is changed
                        correct={userAnswer?.correctAnswer===answer}
                        userClicked={userAnswer?.answer===answer}>
                            {/* disable the button based if user has answered */}
                            {/* !!userAnswer - convert to boolean or use ternary expression to check userAnswer?true:false */}
                            <button disabled={!!userAnswer} onClick={callback} value={answer}>
                                <span dangerouslySetInnerHTML={{__html:answer}}></span>
                            </button>
                        </ButtonWrapper>
                    ))
                }
            </div>
        </Wrapper>
    )
}
export default QuestionCard