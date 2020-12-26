import React, { Component } from "react";
import CarList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from '../../components/Scroll/Scroll'
//import { robots } from "../../data/robots";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: "",
    }; //here the searchfield e is empty
    //this.onSearchChange(this);

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }; //the method to change state

  render(): any {
    //filter
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length?
    <h1>Loading</h1>:
    (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>

          <CarList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    
  }
}

export default App;
