import { combineReducers } from "redux";
import { PokemonListReducer } from "./PokemonListReducer";
const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
});
export default RootReducer;
