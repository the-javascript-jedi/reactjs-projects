import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
// router
import { Link } from "react-router";
// import graphql query
import query from "../queries/fetchSongs";

export class SongList extends Component {
  // helper method to render songs
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return (
        <li className="collection-item" key={song.id}>
          {song.title}
        </li>
      );
    });
  }
  render() {
    console.log("this.props", this.props);
    // return loading screen when graphql is loading the data
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">
          <h1>SongList</h1>
          {this.renderSongs()}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}
// we pass the imported fetchSongs graphql query
// this below code will send the query to graphql and return the data as props
export default graphql(query)(SongList);
