import "./App.css";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
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
                  <FeedbackStats />
                  <FeedbackForm />
                  <FeedbackList />
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
