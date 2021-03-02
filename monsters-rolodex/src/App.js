import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    //de-structure
    //  Above code is Same As:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="text"
          placeholder="search monsters"
          onChange={this.searchField}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  searchField = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
}

export default App;
