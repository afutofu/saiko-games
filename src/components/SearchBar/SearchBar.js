import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = { searchTerm: "", search: "", fireRedirect: false };

  onInputChange = (event) => {
    this.setState({ search: event.target.value, fireRedirect: false });
  };

  onSearch = (event) => {
    event.preventDefault();
    this.setState({
      searchTerm: this.state.search,
      search: "",
      fireRedirect: true,
    });
  };

  render() {
    return (
      <React.Fragment>
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
        {this.state.fireRedirect && (
          <Redirect
            to={{
              pathname: "/games",
              search: `?search=${this.state.searchTerm}`,
              state: { searchTerm: this.state.searchTerm },
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default SearchBar;
