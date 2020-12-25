import React, { Component } from "react";
import CarList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import { robots } from "../data/robots";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "", //here the searchfield e is empty
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //the method to change state

   
  };

  render() {
          //filter
    const filteredRobots = this.state.robots.filter(robots => {
        return robots.name
          .toUpperCase()
          .includes(this.state.searchfield.toUpperCase());
      });
  
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
