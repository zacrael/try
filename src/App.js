import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  componentDidMount() {
    // const res = await axios;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.setState({ monsters: json }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // const arr = ["jown", "jo", "wew", "ww"];
    // const value = "jo";
    // const newArr = arr.filter(ele => RegExp(value).exec(ele));
    // console.log("ww", newArr);
    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
