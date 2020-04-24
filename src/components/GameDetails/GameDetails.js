import React from "react";

import styles from "./GameDetails.module.css";

const GameDetails = (props) => {
  let releaseDates = [],
    gameModes = [],
    series = [],
    franchises = [],
    gameEngine = [];

  for (let i = 0; i < props.releaseDates; i++) {
    releaseDates.push(
      <p className={styles.detailEntry}>Oct 07, 2011 - Android</p>
    );
  }

  for (let i = 0; i < props.gameModes; i++) {
    gameModes.push(<p className={styles.detailEntry}>Single player</p>);
  }

  for (let i = 0; i < props.series; i++) {
    series.push(<p className={styles.detailEntry}>Spiral Knights</p>);
  }

  for (let i = 0; i < props.franchises; i++) {
    franchises.push(<p className={styles.detailEntry}>Spiral Knights</p>);
  }

  for (let i = 0; i < props.gameEngine; i++) {
    gameEngine.push(<p className={styles.detailEntry}>Bedrock Engine</p>);
  }

  return (
    <div className={styles.gameDetails}>
      <div className={styles.detailSection}>
        <p className={styles.title}>Release Dates: </p>
        {releaseDates}
      </div>
      <div className={styles.detailSection}>
        <p className={styles.title}>Game Modes: </p>
        {gameModes}
      </div>
      <div className={styles.detailSection}>
        <p className={styles.title}>Series: </p>
        {series}
      </div>
      <div className={styles.detailSection}>
        <p className={styles.title}>Franchises: </p>
        {franchises}
      </div>
      <div className={styles.detailSection}>
        <p className={styles.title}>Game Engine: </p>
        {gameEngine}
      </div>
    </div>
  );
};

export default GameDetails;
