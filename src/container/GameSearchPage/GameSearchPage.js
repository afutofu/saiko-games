import React, { Component } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverDisplay2 from "../../components/GameCoverDisplay2/GameCoverDisplay2";
import GameCoverDisplay2Container from "../../components/GameCoverDisplay2Container/GameCoverDisplay2Container";

import styles from "./GameSearchPage.module.css";

class GameSearchPage extends Component {
  state = {};

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  render() {
    return (
      <div className={styles.gameSearchPage}>
        <img
          className={styles.backgroundImage}
          src="https://images.igdb.com/igdb/image/upload/t_1080p/qifkxxpckhq4wyxgquqe.jpg"
          alt="bg"
        />
        <div className={styles.background} />
        <div className={styles.container}>
          <SectionTitle title="games" />
          <GameCoverDisplay2Container
            onGameClick={this.onGameClick}
            games={3}
          />
        </div>
      </div>
    );
  }
}

export default GameSearchPage;
