import React, { Component } from "react";

import FrontPage from "../FrontPage/FrontPage";

import styles from "./MainContent.module.css";

class MainContent extends Component {
  state = {};

  renderContent = () => {
    return <FrontPage />;
  };

  render() {
    return this.renderContent();
  }
}

export default MainContent;
