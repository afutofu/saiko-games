import React from "react";

import styles from "./GameCoverDisplay.module.css";

const GameCoverDisplay = (props) => {
  return (
    <div
      onClick={() => props.onGameClick(1)}
      className={styles.gameCoverDisplay}
    >
      <img src={props.cover} className={styles.cover} alt="cover" />
      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.genre}>{props.genre}</p>
        <h3 className={styles.rating}>{props.rating}</h3>
      </div>
    </div>
  );
};

export default GameCoverDisplay;
