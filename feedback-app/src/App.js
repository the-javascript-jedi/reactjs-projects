import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    // add an id
    newFeedback.id = uuidv4();
    console.log("newFeedback", newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <BrowserRouter>
      <Header text="feedback ui"></Header>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  deleteFeedback={deleteFeedback}
                />
              </>
            }
          ></Route>
          {/* In react router 6 we need to pass jsx */}
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </div>
      <AboutIconLink />
    </BrowserRouter>
  );
};

export default App;
