import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFeedback } from "../features/feedback/feedbackSlice";

const FeedbackItem = ({ itemData }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(itemData.rating);
  const [text, setText] = useState(itemData.text);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteFeedback(itemData.id));
    }
  };

  return (
    <div className="card">
      {text} + {rating}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
export default FeedbackItem;
