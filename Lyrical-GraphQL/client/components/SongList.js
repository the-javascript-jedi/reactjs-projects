import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
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
      <ul className="collection">
        <h1>SongList</h1>
        {this.renderSongs()}
      </ul>
    );
  }
}
// the helper from the gql library to form up the query itself.
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
// this below code will send the query to graphql and return the data as props
export default graphql(query)(SongList);
