import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackList({deleteFeedback}) {
  //useContext and access the state
  const {feedback}=useContext(FeedbackContext);

  console.log("feedback",feedback);
  if(!feedback||feedback.length===0){
      return <p>No Feedback Yet</p>
  }
 
// without animation
  return <div className="feedback-list">
      {
          feedback.map((item)=>{
              return   (
                  <FeedbackItem key={item.id} item={item} handleDelete={deleteFeedback}/>
              )              
          })
      }
  </div>;
}
export default FeedbackList;
