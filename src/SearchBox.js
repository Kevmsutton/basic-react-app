import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="pa2 tc">
        <input
          onChange={event => this.props.onSearchChange(event)}
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search Robots"
        />
      </div>
    );
  }
}

export default SearchBox;
