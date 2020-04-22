import React from "react";

import GameScreenshotDisplay from "../GameScreenshotDisplay/GameScreenshotDisplay";

import styles from "./GameScreenshotContainer.module.css";

const GameScreenshotContainer = (props) => {
  const renderContent = () => {
    let games = [];

    for (let i = 0; i < props.games; i++) {
      games.push(
        <GameScreenshotDisplay
          key={i}
          name="Skyrim"
          genre={["Action", "Fantasy"][0]}
          rating="96"
        />
      );
    }

    return <div className={styles.gameScreenshotContainer}> {games}</div>;
  };

  return renderContent();
};

export default GameScreenshotContainer;
