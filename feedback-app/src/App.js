import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="feedback ui"></Header>
      <div className="container">
        {/* <FeedbackItem></FeedbackItem> */}
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </>
  );
};

export default App;
