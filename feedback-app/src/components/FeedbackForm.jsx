import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from "./RatingSelect";
import FeedbackContext from '../context/FeedbackContext';

import { useState,useContext,useEffect } from 'react';
function FeedbackForm() {
  const [text,setText]=useState('');
  const [rating,setRating]=useState(10);
  const [btnDisables,setBtnDisabled]=useState(true);
  const [message,setMessage]=useState('');
  //useContext and access the state
  const {fnAddFeedback,feedbackEditState,fnUpdateFeedback}=useContext(FeedbackContext);

  useEffect(()=>{
    //set the updated values in form   
    if(feedbackEditState.edit===true){
        setBtnDisabled(false);
        setText(feedbackEditState.item.text)
    }
  },[feedbackEditState])
  const handleChange=(e)=>{
    if(text===''){
        setBtnDisabled(true);
        setMessage(null);
    }else if(text!==''&&text.trim().length<=10){
        setMessage('Text must be atleast 10 characters');
        setBtnDisabled(true);
    }
    else{
        setMessage(null);
        setBtnDisabled(false);
    }
    setText(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    if(text.trim().length>10){
        const newFeedback={
            text:text,
            rating:rating
        }
        if(feedbackEditState.edit===true){
            fnUpdateFeedback(feedbackEditState.item.id,newFeedback)
        }else{
            fnAddFeedback(newFeedback);
        }
    }
    setText('');
  }

  return <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          {/* todo rating select component */}
          <RatingSelect select={(rating)=>setRating(rating)}/>
          <div className="input-group">
              <input type="text" placeholder="Write a review" onChange={handleChange} value={text}/>
              <Button type="submit" version="secondary" isDisabled={btnDisables}>Send</Button>
          </div>
          <div>{message}</div>
      </form>
  </Card>;
}
export default FeedbackForm;
