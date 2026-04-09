import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteFeedback,
  updateFeedback,
} from "../features/feedback/feedbackSlice";

const FeedbackItem = ({ itemData }) => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(itemData.rating);
  const [text, setText] = useState(itemData.text);
  const [editText, setEditText] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteFeedback(itemData.id));
    }
  };

  const handleEdit = () => {
    setEditText(true);
  };

  const handleSave = () => {
    dispatch(
      updateFeedback({
        id: itemData.id,
        text,
        rating,
      }),
    );

    setEditText(false);
  };

  return (
    <div className="card">
      {!editText ? (
        <>
          {text} + {rating}
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default FeedbackItem;
