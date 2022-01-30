import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from "prop-types";
import {motion,AnimatePresence} from 'framer-motion';
function FeedbackList({feedback,deleteFeedback}) {
  console.log("feedback",feedback);
  if(!feedback||feedback.length===0){
      return <p>No Feedback Yet</p>
  }
//with framer animation
//   return <div className="feedback-list">
//       <AnimatePresence>
//       {
//           feedback.map((item)=>{
//               return(
//                   <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:0}} exit={{opacity:0}}>
//                   <FeedbackItem  item={item} handleDelete={deleteFeedback}/>
//                   </motion.div>
//                   )              
//                 })
//             }
//       </AnimatePresence>
//   </div>;  
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
FeedbackList.propTypes={
    feedback:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired
        })
    )
}
export default FeedbackList;
