import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  //useContext and access the state
  const {feedback}=useContext(FeedbackContext);
  //Calculate ratings average  
  let average=feedback.reduce((acc,cur)=>{
      return acc+cur.rating
  },0)  /feedback.length;
  //if ending .0 replace with nothing
  average=average.toFixed(1).replace(/[.,]0$/,'');
  return <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average)?0:average}</h4>
  </div>;
}
FeedbackStats.propTypes={
    feedback:PropTypes.array.isRequired
}
export default FeedbackStats;
