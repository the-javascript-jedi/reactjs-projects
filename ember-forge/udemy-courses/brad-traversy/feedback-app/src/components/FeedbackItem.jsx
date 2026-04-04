import { useState } from "react";

const FeedbackItem = (props) => {
  const [rating, setRating] = useState(props.itemData.rating);
  const [text, setText] = useState(props.itemData.text);

  return (
    <div className="card">
      {text} + {rating}
      <button onClick={() => props.handleDelete(props.itemData.id)}>
        Delete
      </button>
    </div>
  );
};
export default FeedbackItem;
