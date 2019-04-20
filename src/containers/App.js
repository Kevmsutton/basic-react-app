import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import { robots } from "../Robots.js";
import SearchBox from "../SearchBox";
import "../index.css";
import "../App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
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
  state = {};

  componentDidMount() {}
  //   selectedRobots = () => {
  //     return robots.filter(robot =>
  //       robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  //     );
  //   };

  render() {
    const { searchField, onSearchChange } = this.props;
    const selectedRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="pa2 tc">
        <h1 className="f1"> Robofriends</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={selectedRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
