import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from "uuid";

const FeedbackForm = ({ appAddNewFeedback }) => {
  const [text, setText] = useState("");
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const selectRating = (rating) => {
    console.log("selectRating", rating);
    setRating(rating);
  };

  const handleTextChange = (e) => {
    console.log("event", e.target.value);
    setText(e.target.value);
    if (e.target.value.trim().length < 5) {
      setBtnDisabled(true);
      setMessage("enter more than 5 characters");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: uuidv4(),
      text: text,
      rating: rating,
    };
    // console.log("newFeedback", newFeedback);
    appAddNewFeedback(newFeedback);
    setText("");
    setRating(0);
    setMessage("");
    setBtnDisabled(true);
  };
  return (
    <div>
      <p>FeedbackForm</p>
      <form onSubmit={handleSubmit}>
        <div>
          <RatingSelect selectRating={selectRating} />
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            value={text}
            onChange={handleTextChange}
          />
          {message && <p>{message}</p>}
          <Button
            type={"submit"}
            isDisabled={isBtnDisabled}
            version={"primary"}
          >
            Send Hello
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
