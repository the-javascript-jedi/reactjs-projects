import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title={"github finder"} />
          <main className="container mx-auto px-3 pb-12">Content</main>
          <Footer />
        </div>
      </Router>
    </>
  );
}
export default App;
