import React, { Component } from "react";

import GameFirstView from "../GameFirstView/GameFirstView";
import VideoContainer from "../VideoContainer/VideoContainer";

import styles from "./GamePage.module.css";

class GamePage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.gamePage}>
        <img
          src="https://images.igdb.com/igdb/image/upload/t_1080p/hpisfx4wmws8ov1n9d1j.jpg"
          alt="screenshot"
          className={styles.backgroundImage}
        />
        <div className={styles.background} />
        <GameFirstView />

        <VideoContainer videos={3} />
      </div>
    );
  }
}

export default GamePage;
