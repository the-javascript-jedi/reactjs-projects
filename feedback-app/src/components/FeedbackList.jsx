import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  //useContext and access the state
  const {feedback}=useContext(FeedbackContext);
  if(!feedback||feedback.length===0){
      return <p>No Feedback Yet</p>
  }
 
// without animation
  return <div className="feedback-list">
      {
          feedback.map((item)=>{
              return   (
                  <FeedbackItem key={item.id} item={item} />
              )              
          })
      }
  </div>;
}
export default FeedbackList;
