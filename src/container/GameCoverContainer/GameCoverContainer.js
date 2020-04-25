import React, { Component } from "react";

import GameCoverDisplay from "../../components/GameCoverDisplay/GameCoverDisplay";

import styles from "./GameCoverContainer.module.css";

class GameCoverContainer extends Component {
  state = {};

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  renderContent = () => {
    let games = [];
    for (let i = 0; i < this.props.games; i++) {
      games.push(
        <GameCoverDisplay
          onGameClick={this.onGameClick}
          key={i}
          name="Minecraft"
          genre={["Simulator", "Strategy"][0]}
          rating="89"
        />
      );
    }

    return <div className={styles.gameCoverContainer}>{games}</div>;
  };

  render() {
    return this.renderContent();
  }
}

export default GameCoverContainer;
