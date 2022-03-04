import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#141618",
      color: "#fff",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
