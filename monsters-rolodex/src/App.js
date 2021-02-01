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
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox
          placeHolder="searchMonsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <br />
        <br />
        <br />
        <CardList monsters={filteredMonsters}></CardList>
        <></>
      </div>
    );
  }
}
export default App;
