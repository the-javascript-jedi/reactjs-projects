import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  //
  // using async await
  // -we need to specify the function as asyncronous
  // Fetch feedback - async function
  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
  };

  useEffect(() => {
    // using async await
    fetchFeedback();
  }, []);

  // feedbackEdit -state will contain the item which we are editing
  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false,
  });
  // //update feedback
  // const fnUpdateFeedback = (id, updatedItem) => {
  //   console.log("id, updatedItem", id, updatedItem);
  //   // setFeedback(
  //   //   feedback.map((item) =>
  //   //     item.id === id ? { ...item, ...updatedItem } : item
  //   //   )
  //   // );
  //   //updating using index
  //   var objIndex = feedback.findIndex((obj) => obj.id == id);
  //   var feedBackCopy = feedback.slice();
  //   feedBackCopy[objIndex].text = updatedItem.text;
  //   feedBackCopy[objIndex].rating = updatedItem.rating;
  //   setFeedback(feedBackCopy);
  //   //reset the edit to false
  //   // setFeedbackEditState({ item: "", edit: false });
  // };

  // //update feedback using PUT request
  const fnUpdateFeedback = async (id, updatedItem) => {
    //PUT request to server
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();
    console.log("data", data);
    /*data={
    "text": "this is updated text",
    "rating": 10,
    "id": 4
     } */
    //updating using index
    //find the id to be updated from the whole data and update it
    var objIndex = feedback.findIndex((obj) => obj.id == id);
    var feedBackCopy = feedback.slice();
    feedBackCopy[objIndex].text = data.text;
    feedBackCopy[objIndex].rating = data.rating;
    setFeedback(feedBackCopy);
    //reset the edit to false
    // setFeedbackEditState({ item: "", edit: false });
  };

  // // add feedback
  const fnAddFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    // add an id -- not necessary since json-server will create a new id for us
    // newFeedback.id = uuidv4();
    //add the feedback to the existing state
    setFeedback([newFeedback, ...feedback]);
  };
  //edit feedback
  const fnEditFeedback = (item) => {
    setFeedbackEditState({ item, edit: true });
  };

  // delete feedback -- using async await
  const fnDeleteFeedback = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // delete feedback -- using fetch api
  // const fnDeleteFeedback = (id) => {
  //   if (window.confirm("Are you sure?")) {
  //     // await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });
  //     fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" }).then(
  //       (response) => console.log("response", response)
  //     );
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };
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
