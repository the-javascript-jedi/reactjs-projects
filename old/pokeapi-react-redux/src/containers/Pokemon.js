import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
// Redux Action
import { GetPokemon } from "../actions/pokemonActions";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemonName;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.PokemonMultiple);
  // dispatch action to get the pokemon abilities
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);
  // Show Data
  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      console.log(
        "pokemonState.data[pokemonName]",
        pokemonState.data[pokemonName]
      );
      const pokemonDataFromAPI = pokemonState.data[pokemonName];

      return (
        <div className="pokemon-data">
          <div className="pokeImageContainer">
            <div className="pokemon-images">
              <h1>Sprites</h1>
              <div className="poke-images ">
                <img src={pokemonDataFromAPI.sprites.front_shiny} alt="" />
                <img src={pokemonDataFromAPI.sprites.back_shiny} alt="" />
                <img src={pokemonDataFromAPI.sprites.front_default} alt="" />
                <img src={pokemonDataFromAPI.sprites.back_default} alt="" />
              </div>
            </div>
          </div>

          <div className="pokemon-stat">
            <h1>Stats</h1>
            {pokemonDataFromAPI.stats.map((pokeData) => {
              return (
                <div>
                  {pokeData["stat"].name} {pokeData.base_stat}
                </div>
              );
            })}
          </div>
          <div className="pokemon-abilities">
            <h1>Abilities</h1>
            {pokemonDataFromAPI.abilities.map((pokeData) => {
              return (
                <div>
                  {pokeData["ability"].name} {pokeData.base_stat}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (pokemonState.loading === true) {
      return <p>Loading...</p>;
    }
    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }
    return <p>error getting pokemon</p>;
  };

  console.log("props.match.params.pokemonName", props.match.params.pokemonName);
  console.log("pokemonState", pokemonState);
  return (
    <div className="poke">
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
