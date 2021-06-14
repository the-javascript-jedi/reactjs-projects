import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
export class SongList extends Component {
  render() {
    console.log("this.props", this.props);
    return <div>SongList</div>;
  }
}
// the helper from the gql library to form up the query itself.
const query = gql`
  {
    songs {
      title
    }
  }
`;
export default graphql(query)(SongList);
