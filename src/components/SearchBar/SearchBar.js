import React, { Component } from "react";

import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = { search: "" };

  onInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  onSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <form className={styles.searchBar} onSubmit={this.onSearch}>
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.search}
          className={styles.searchInput}
          placeholder="Search games..."
        />
        <button className={styles.button} type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
