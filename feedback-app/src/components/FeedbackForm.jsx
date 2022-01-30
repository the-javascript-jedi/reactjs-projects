import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react';
function FeedbackForm() {
  const [text,setText]=useState('');
  const [btnDisables,setBtnDisabled]=useState(true);
  const [message,setMessage]=useState('');
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
  return <Card>
      <form>
          <h2>How would you rate your service with us?</h2>
          {/* todo rating select component */}
          <div className="input-group">
              <input type="text" placeholder="Write a review" onChange={handleChange} value={text}/>
              <Button type="submit" version="secondary" isDisabled={btnDisables}>Send</Button>
          </div>
          <div>{message}</div>
      </form>
  </Card>;
}

export default FeedbackForm;
