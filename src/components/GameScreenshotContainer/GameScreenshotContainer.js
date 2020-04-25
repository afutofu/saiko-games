import React from "react";

import GameScreenshotDisplay from "../GameScreenshotDisplay/GameScreenshotDisplay";

import styles from "./GameScreenshotContainer.module.css";

const GameScreenshotContainer = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  const renderContent = () => {
    let games = [];

    for (let i = 0; i < props.games; i++) {
      games.push(
        <GameScreenshotDisplay
          onGameClick={onGameClick}
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
