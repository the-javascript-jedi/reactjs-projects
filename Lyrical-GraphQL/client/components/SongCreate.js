import React, { Component } from "react";
import gql from "graphql-tag";
// graphql helper to connect react to graphql
import { graphql } from "react-apollo";
// router
export class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }
  onSubmit(event) {
    event.preventDefault();
    // attempt to reach our back end server
    console.log("this.state.title", this.state.title);
    //using the props.mutate we can pass the variables from react component to graphql
    this.props.mutate({
      variables: {
        title: this.state.title,
      },
    });
  }
  render() {
    return (
      <div>
        <h2>Create a New Song</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="txtSongTitle">Song Title</label>
          <input
            id="txtSongTitle"
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}
// we specify the id,title to be returned from graphql after creating the song using the title
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
// use graphql helper and pass the mutation with params to the graphql from component
export default graphql(mutation)(SongCreate);
