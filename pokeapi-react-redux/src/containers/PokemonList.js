import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const dispatch = useDispatch();
  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
  useEffect(() => {
    FetchData(1);
  }, []);
  const pokemonListRedux = useSelector((state) => state.PokemonList);
  // state
  const [searchFilter, setSearchFilter] = useState("");
  const [pokemonListState, setPokemonListState] = useState([]);
  useEffect(() => {
    setPokemonListState(pokemonListRedux.data);
  }, [pokemonListRedux]);
  const ShowData = () => {
    if (!_.isEmpty(pokemonListRedux.data)) {
      return searchFilterPokemon.map((pokemon) => {
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
    if (pokemonListRedux.loading) {
      return <p>Loading...</p>;
    }
    if (pokemonListRedux.errorMsg !== "") {
      return <p>{pokemonListRedux.errorMsg}</p>;
    }
    return <p>Unable to get data</p>;
  };

  // search filter
  const searchFilterPokemon = pokemonListState.filter((pokemonList) => {
    return pokemonList.name.toLowerCase().includes(searchFilter.toLowerCase());
  });
  // setPokemonListState(result);
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button onClick={() => props.history.push(`/pokemon/${searchFilter}`)}>
          SEARCH
        </button>
      </div>

      <br />
      {ShowData()}
      <br />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => {
          //e.selected gives the gpage number
          //dispatch(GetPokemonList(e.selected + 1));
          FetchData(e.selected + 1);
        }}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(pokemonListRedux.count / 15)}
        // count of pokemon -1126
        //ceil(1126/15)=76
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={5}
        containerClassName={"pagination"}
        pageClassName={"pageClassName"}
        activeClassName={"activeClassName"}
      />
    </div>
  );
};

export default PokemonList;
