import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import FrontPage from "../FrontPage/FrontPage";
import GamePage from "../GamePage/GamePage";
import GameSearchPage from "../GameSearchPage/GameSearchPage";

import styles from "./MainContent.module.css";

class MainContent extends Component {
  state = { pageId: 0, gameId: null, searchTerm: "" };

  onLogoClick = () => {
    window.scrollTo(0, 0);
    this.setState({ pageId: 0, gameId: null });
  };

  onGameClick = (gameId) => {
    window.scrollTo(0, 0);
    this.setState({ pageId: 1, gameId: gameId });
  };

  onSearch = (gameName) => {
    window.scrollTo(0, 0);
    this.setState({ pageId: 2, searchTerm: gameName });
  };

  renderContent = () => {
    console.log(this.state.pageId);
    switch (this.state.pageId) {
      case 0:
        return <FrontPage onGameClick={this.onGameClick} />;
      case 1:
        return <GamePage onGameClick={this.onGameClick} />;
      case 2:
        return <GameSearchPage onGameClick={this.onGameClick} />;
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
