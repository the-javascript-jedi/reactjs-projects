import axios from "axios";
// Get All Pokemon
export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    /*
    1=0 => 1*15-15=0
    2=15 => 2*15-15=15
    3=30 => 3*15-15=30
    */
    const res = await axios.get(
      //   "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      `ahttps://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );
    console.log("res", res);
    console.log("res.data.results", res.data.results);
    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};
// Get Individual Pokemon
export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_MULTIPLE_LOADING",
    });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log("res", res);
    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
      pokemon: pokemon,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: "POKEMON_MULTIPLE_FAIL",
    });
  }
};
