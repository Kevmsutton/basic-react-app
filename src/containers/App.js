import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../SearchBox";
import "../index.css";
import "../App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import { setSearchField, requestRobots } from "../actions.js";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const selectedRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
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
