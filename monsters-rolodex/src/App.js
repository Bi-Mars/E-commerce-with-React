import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      title: "",
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
    const { monsters, searchField, title } = this.state;

    // const filteredMonsters = monsters.filter((monster) =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );

    return (
      <div className="App">
        <h1> {title}</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.searchField}
        />
        <CardList monsters={monsters} />
      </div>
    );
  }

  searchField = (event) => {
    this.setState({
      searchField: event.target.value,
      title: event.target.value,
    });
  };
}

export default App;
