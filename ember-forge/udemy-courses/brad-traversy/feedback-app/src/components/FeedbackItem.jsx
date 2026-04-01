import { useState } from "react";

const FeedbackItem = (props) => {
  const [rating, setRating] = useState(props.itemData.rating);
  const [text, setText] = useState(props.itemData.text);

  const handleClick = (id) => {
    console.log("id", id);
  };
  return (
    <div className="card">
      {text} + {rating}
      <button onClick={() => handleClick(props.itemData.id)}>Click Me</button>
    </div>
  );
};

export default FeedbackItem;
