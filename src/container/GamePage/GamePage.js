import React, { Component } from "react";

import GameFirstView from "../GameFirstView/GameFirstView";
import VideoContainer from "../VideoContainer/VideoContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverContainer from "../GameCoverContainer/GameCoverContainer";

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
        <div className={styles.container}>
          <SectionTitle title="recommendations" />
          <GameCoverContainer games={5} />
          <div className={styles.reviewsDetails}>
            <div className={styles.reviews}>
              <SectionTitle title="reviews" />
            </div>
            <div className={styles.details}>
              <SectionTitle title="details" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
