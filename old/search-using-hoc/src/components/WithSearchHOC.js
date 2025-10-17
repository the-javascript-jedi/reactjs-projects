import React from "react";
const WithSearchHOC = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      searchTerm: "",
    };
    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let { searchTerm } = this.state;
      return (
        <div>
          <div>
            <input
              onChange={this.handleSearch}
              value={searchTerm}
              type="text"
              placeholder="Search"
            />
          </div>
          {/* the component which will display the searched data */}
          <WrappedComponent searchTerm={searchTerm} />
        </div>
      );
    }
  };
};
export default WithSearchHOC;
