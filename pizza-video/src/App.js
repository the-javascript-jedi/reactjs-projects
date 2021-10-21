import Header from "./components/Header";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  // state
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });
  // check if data is present in local storage
  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    // set the state if data is present in local storage
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
