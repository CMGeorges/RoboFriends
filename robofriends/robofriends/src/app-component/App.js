import React, { Component } from "react";
import CarList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "", //here the searchfield e is empty
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      response.json();
    }).
    this.setState({ robots: robots });
    console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //the method to change state
  };

  render() {
    //filter
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toUpperCase()
        .includes(this.state.searchfield.toUpperCase());
    });
    console.log("render");
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CarList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
