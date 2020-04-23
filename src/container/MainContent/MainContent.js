import React, { Component } from "react";

import FrontPage from "../FrontPage/FrontPage";
import GamePage from "../GamePage/GamePage";

import styles from "./MainContent.module.css";

class MainContent extends Component {
  state = {};

  renderContent = () => {
    return <GamePage />;
  };

  render() {
    return this.renderContent();
  }
}

export default MainContent;
