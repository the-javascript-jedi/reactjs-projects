import React from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log("users", users);
        this.setState({ monsters: users });
      });
  }
  // using arrow functions the scope of this will automatically be set to the place they were defined in the first place
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeHolder="searchMonsters"
          handleChange={this.handleChange}
        />
        <br />
        <CardList monsters={filteredMonsters}></CardList>
        <></>
      </div>
    );
  }
}
export default App;
