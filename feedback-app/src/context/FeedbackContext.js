import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This item is containing 5 rating",
      rating: 5,
    },
    {
      id: 3,
      text: "This item is containing 8 rating",
      rating: 8,
    },
  ]);
  // feedbackEdit -state will contain the item which we are editing
  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false,
  });
  //update feedback
  const fnUpdateFeedback = (id, updatedItem) => {
    console.log("id, updatedItem", id, updatedItem);
    // setFeedback(
    //   feedback.map((item) =>
    //     item.id === id ? { ...item, ...updatedItem } : item
    //   )
    // );
    //updating using index
    var objIndex = feedback.findIndex((obj) => obj.id == id);
    var feedBackCopy = feedback.slice();
    feedBackCopy[objIndex].text = updatedItem.text;
    feedBackCopy[objIndex].rating = updatedItem.rating;
    setFeedback(feedBackCopy);
    //reset the edit to false
    // setFeedbackEditState({ item: "", edit: false });
  };
  //edit feedback
  const fnEditFeedback = (item) => {
    setFeedbackEditState({ item, edit: true });
  };

  // delete feedback
  const fnDeleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // add feedback
  const fnAddFeedback = (newFeedback) => {
    // add an id
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        fnDeleteFeedback,
        fnAddFeedback,
        fnEditFeedback,
        feedbackEditState,
        fnUpdateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
