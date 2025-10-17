import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/pokemon/test"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemonName"} exact component={Pokemon} />
        {/* If no routes match redirect to base page */}
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
