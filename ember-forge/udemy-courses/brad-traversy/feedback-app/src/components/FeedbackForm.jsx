import { useState } from "react";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    console.log("event", e.target.value);
    if (e.target.value === 0) {
      setBtnDisabled(true);
    } else if (e.target.value !== 0 && e.target.value.length < 5) {
      setBtnDisabled(true);
      setMessage("enter more than 5 characters");
    } else {
      setBtnDisabled(false);
      setText(e.target.value);
    }
  };
  return (
    <div>
      <p>FeedbackForm</p>
      <div>
        <input type="text" name="" id="" onChange={handleTextChange} />
        <Button type={"submit"} isDisabled={isBtnDisabled} version={"primary"}>
          Send Hello
        </Button>
      </div>
    </div>
  );
};

export default FeedbackForm;
