import React, { Component } from "react";
export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "Starting Value",
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })}
        />
        <br />
        Value of the input:{this.state.term}
      </div>
    );
  }
}
export default SearchBar;
