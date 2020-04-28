import React from "react";

import styles from "./GameScreenshotDisplay.module.css";

const GameScreenshotDisplay = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  return (
    <div
      onClick={() => onGameClick(1)}
      className={styles.gameScreenshotDisplay}
    >
      <img
        className={styles.screenshot}
        src={props.screenshot}
        alt="screenshot"
      />
      <div className={styles.background}>
        <div className={styles.infoContainer}>
          <div className={styles.nameGenre}>
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.genre}>{props.genre}</p>
          </div>
          <h3 className={styles.rating}>{props.rating}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameScreenshotDisplay;
