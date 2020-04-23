import React, { Component } from "react";

import styles from "./GamePage.module.css";

class GamePage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.GamePage}>
        <img
          src="https://images.igdb.com/igdb/image/upload/t_screenshot_med/hpisfx4wmws8ov1n9d1j.jpg"
          alt="screenshot"
          className={styles.background}
        />
        <div className={styles.background} />
        <div className={styles.wideContainer}>
          <div className={styles.container}>GamePage</div>
        </div>
      </div>
    );
  }
}

export default GamePage;
