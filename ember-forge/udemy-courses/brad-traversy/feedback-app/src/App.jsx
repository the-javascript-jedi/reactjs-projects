import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData.json";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedbackData, setFeedBackData] = useState(FeedbackData.feedback);
  const appHandleDeleteFeedback = (id) => {
    console.log("appHandleDeleteFeedback", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBackData(feedbackData.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <div className="container">
        <Header text={"data"} />
        <FeedbackStats feedBackData={feedbackData} />
        <FeedbackList
          feedBackData={feedbackData}
          appHandleDeleteFeedback={appHandleDeleteFeedback}
        />
      </div>
    </>
  );
}
export default App;
