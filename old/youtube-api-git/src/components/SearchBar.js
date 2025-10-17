import React, { Component } from "react";
export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          // whenever input changes the onInputChange function is called
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <br />
        Value of the input:{this.state.term}
      </div>
    );
  }
  // calls the onSearchTermChange callback function
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
