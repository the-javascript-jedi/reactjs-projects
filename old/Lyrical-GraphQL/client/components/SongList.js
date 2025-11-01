import React, { Component } from "react";
import gql from "graphql-tag";
// graphql helper to connect react to graphql
import { graphql } from "react-apollo";
// router
import { Link } from "react-router";
// import graphql query
import query from "../queries/fetchSongs";

export class SongList extends Component {
  // song delete function
  onSongDelete(id) {
    // call the mutation
    this.props.mutate({
      variables: { id: id },
    });
  }
  // helper method to render songs
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return (
        <li className="collection-item" key={song.id}>
          {song.title}
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(song.id)}
          >
            delete
          </i>
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
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;
// we pass the imported fetchSongs graphql query
// this below code will send the query to graphql and return the data as props
// this says make a helper using the graphql function and this mutation and then immediately invoke it with the result of this other helper and the song list
export default graphql(mutation)(graphql(query)(SongList));
