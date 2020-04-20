import React, { Component } from "react";

import styles from "./Main.module.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.container}>Main</div>
      </div>
    );
  }
}

export default Main;
