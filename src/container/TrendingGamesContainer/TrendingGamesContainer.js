import React, { Component } from "react";

import TrendingGame from "../../components/TrendingGame/TrendingGame";
import GameScreenshotDisplay from "../../components/GameScreenshotDisplay/GameScreenshotDisplay";

import styles from "./TrendingGamesContainer.module.css";

class TrendingGameContainer extends Component {
  state = { TrendingGame: {}, GameScreenshot: {} };

  renderContent = () => {
    let games = [];

    for (let i = 0; i < this.props.games; i++) {
      games.push(
        <GameScreenshotDisplay
          key={i}
          name="Skyrim"
          genre={["Action", "Fantasy"][0]}
          rating="96"
        />
      );
    }

    return (
      <div className={styles.trendingGame}>
        <TrendingGame
          name="Mount & Blade: Bannerlord"
          genres={["RPG", "Action", "Simulator"]}
          storyline="Mount & Blade II: Bannerlord is the eagerly awaited sequel to the acclaimed medieval combat simulator and role-playing game Mount & Blade: Warband. Set 200 years before, it expands both the detailed fighting system and the world of Calradia. Bombard mountain fastnesses with siege engines, establish secret criminal empires in the back alleys of cities, or charge into the thick of chaotic battles in your quest for power."
        />
        <div className={styles.otherGames}>{games}</div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default TrendingGameContainer;
