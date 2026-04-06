import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData.json";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedBackData, setFeedBackData] = useState(FeedbackData.feedback);
  const appHandleDeleteFeedback = (id) => {
    console.log("appHandleDeleteFeedback", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBackData(feedBackData.filter((item) => item.id !== id));
    }
  };

  const appAddNewFeedback = (newFeedback) => {
    console.log("appAddNewFeedback", newFeedback);
    setFeedBackData([newFeedback, ...feedBackData]);
  };
  return (
    <>
      <div className="container">
        <Router>
          <Header text={"data"} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackStats feedBackData={feedBackData} />
                  <FeedbackForm appAddNewFeedback={appAddNewFeedback} />
                  <FeedbackList
                    feedBackData={feedBackData}
                    appHandleDeleteFeedback={appHandleDeleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </Router>
      </div>
    </>
  );
}
export default App;
