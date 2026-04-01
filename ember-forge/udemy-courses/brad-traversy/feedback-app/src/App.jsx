import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData.json";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbackData, setFeedBackData] = useState(FeedbackData.feedback);
  return (
    <>
      <div className="container">
        <Header text={"data"} />
        <FeedbackList feedBackData={feedbackData} />
      </div>
    </>
  );
}
export default App;
