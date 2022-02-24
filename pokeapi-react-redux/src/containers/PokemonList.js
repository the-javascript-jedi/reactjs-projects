import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
const PokemonList = (props) => {
  const dispatch = useDispatch();
  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
  useEffect(() => {
    FetchData(1);
  }, []);
  const pokemonList = useSelector((state) => state.PokemonList);
  console.log("pokemonList--PokemonList.js", pokemonList);
  const ShowData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return pokemonList.data.map((pokemon) => {
        return (
          <div className="list-wrapper">
            <div className="pokemon-item">
              <p>{pokemon.name}</p>
              <Link to={`/pokemon/${pokemon.name}`}>View</Link>
            </div>
          </div>
        );
      });
    }
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }
    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>Unable to get data</p>;
  };
  return (
    <div>
      PokemonList
      <br />
      {ShowData()}
      <br />
    </div>
  );
};

export default PokemonList;
