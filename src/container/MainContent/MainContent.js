import React, { Component } from "react";

import FrontPage from "../FrontPage/FrontPage";
import GamePage from "../GamePage/GamePage";

import styles from "./MainContent.module.css";

class MainContent extends Component {
  state = { gameId: null };

  onGameClick = (gameId) => {
    this.setState({ gameId: gameId });
  };

  renderContent = () => {
    if (this.state.gameId) {
      return <GamePage />;
    } else {
      return <FrontPage onGameClick={this.onGameClick} />;
    }
  };

  render() {
    return this.renderContent();
  }
}

export default MainContent;
