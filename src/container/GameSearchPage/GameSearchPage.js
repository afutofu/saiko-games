import React, { Component } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverDisplay2 from "../../components/GameCoverDisplay2/GameCoverDisplay2";

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
          <GameCoverDisplay2
            onGameClick={this.onGameClick}
            name="Spiral Knights"
            genres={["RPG", "Adventure"]}
            storyline="You have crashed. You are stranded. But you are not alone. The Spiral Knights have awoken on an alien world. Their equipment stores have been 
                raided and their starship, The Skylark, will not recover from the crash. Now they must work together to survive on a journey that will take them to the 
                very core of the world."
            rating={81}
          />
        </div>
      </div>
    );
  }
}

export default GameSearchPage;
