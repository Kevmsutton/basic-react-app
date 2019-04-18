import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import { robots } from "../Robots.js";
import SearchBox from "../SearchBox";
import "../index.css";
import "../App.css";
import Scroll from "../components/Scroll.js";
import { setSearchField } from "../actions.js";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends React.Component {
  state = {
    searchfield: ""
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {}
  //   selectedRobots = () => {
  //     return robots.filter(robot =>
  //       robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  //     );
  //   };

  render() {
    const selectedRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <div className="pa2 tc">
        <h1 className="f1"> Robofriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={selectedRobots} />;
        </Scroll>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
