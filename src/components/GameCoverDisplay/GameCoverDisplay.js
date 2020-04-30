import React from "react";

import styles from "./GameCoverDisplay.module.css";

const GameCoverDisplay = (props) => {
  return (
    <div
      onClick={() => props.onGameClick(props.gameId)}
      className={styles.gameCoverDisplay}
    >
      <img src={props.cover} className={styles.cover} alt="cover" />
      {props.name.length >= 14 ? (
        <div className={styles.infoContainer}>
          <h3 className={styles.nameSmall}>{props.name}</h3>
          <p className={styles.genreSmall}>{props.genre}</p>
          <h3 className={styles.ratingSmall}>{props.rating}</h3>
        </div>
      ) : (
        <div className={styles.infoContainer}>
          <h3 className={styles.name}>{props.name}</h3>
          <p className={styles.genre}>{props.genre}</p>
          <h3 className={styles.rating}>{props.rating}</h3>
        </div>
      )}
    </div>
  );
};

export default GameCoverDisplay;
