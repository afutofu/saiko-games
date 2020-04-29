import React from "react";

import styles from "./TrendingGame.module.css";

const TrendingGame = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  return (
    <div
      onClick={() => onGameClick(props.gameId)}
      className={styles.trendingGame}
    >
      <img
        src={props.screenshot}
        alt="No screenshot found"
        className={styles.screenshot}
      />
      <div className={styles.container}>
        <img src={props.cover} alt="No cover found" className={styles.cover} />
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>{props.name}</h1>
          <h3 className={styles.genres}>{props.genres}</h3>
          <p className={styles.storyline}>{props.storyline}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingGame;
