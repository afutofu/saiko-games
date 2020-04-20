import React, { Component } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import styles from "./Main.module.css";

class Main extends Component {
  state = {};

  renderContent = () => {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <SectionTitle title="featured" />
          <SectionTitle title="latest releases" />
          <SectionTitle title="trending" />
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Main;
