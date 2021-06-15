import {shuffleArray} from './utils';
export type Question={
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;
}
// combination type of Question and string[]
export type QuestionState=Question&{answers:string[]};
export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD="hard"
}
export const fetchQuizQuestions=async(amount:number,difficulty:Difficulty)=>{
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data=await(await fetch(endpoint)).json();    
    // console.log(data);  
    //combine array of incorrect_answers with a string of correct answer to create a new array containing both incorrect_answers and ansers = [answers]
    return data.results.map((question:Question)=>(
        {
            ...question,
            answers:shuffleArray([...question.incorrect_answers,question.correct_answer])
        }
    ))   
}