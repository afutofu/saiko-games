import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import FrontPage from "../FrontPage/FrontPage";
import GamePage from "../GamePage/GamePage";
import GameSearchPage from "../GameSearchPage/GameSearchPage";

import styles from "./MainContent.module.css";

class MainContent extends Component {
  state = { gameId: null, searchTerm: "" };

  onLogoClick = () => {
    window.scrollTo(0, 0);
    this.setState({ gameId: null });
  };

  onGameClick = (gameId) => {
    window.scrollTo(0, 0);
    this.setState({ gameId: gameId });
  };

  onSearch = (gameName) => {
    window.scrollTo(0, 0);
    this.setState({ searchTerm: gameName });
  };

  renderContent = () => {
    if (this.state.searchTerm) {
      return <GameSearchPage onGameClick={this.onGameClick} />;
    }

    if (this.state.gameId) {
      return <GamePage onGameClick={this.onGameClick} />;
    } else {
      return <FrontPage onGameClick={this.onGameClick} />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar onLogoClick={this.onLogoClick} onSearch={this.onSearch} />
        {this.renderContent()}
      </React.Fragment>
    );
  }
}

export default MainContent;
