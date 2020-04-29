import React from "react";

import styles from "./GameCoverDisplay2.module.css";

const GameCoverDisplay2 = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  return (
    <div
      onClick={() => onGameClick(props.id)}
      className={styles.gameCoverDisplay}
    >
      <img src={props.cover} className={styles.cover} alt="No Cover Found" />
      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.genres}>{props.genres.join(", ")}</p>
        <p className={styles.storyline}>{props.storyline}</p>
        <h3 className={styles.rating}>{props.rating ? props.rating : ""}</h3>
      </div>
    </div>
  );
};

export default GameCoverDisplay2;
