import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import FrontPage from "../FrontPage/FrontPage";
import GamePage from "../GamePage/GamePage";

import styles from "./MainContent.module.css";

class MainContent extends Component {
  state = { gameId: null };

  onLogoClick = () => {
    this.setState({ gameId: null });
  };

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
    return (
      <React.Fragment>
        <Navbar onLogoClick={this.onLogoClick} />
        {this.renderContent()}
      </React.Fragment>
    );
  }
}

export default MainContent;
