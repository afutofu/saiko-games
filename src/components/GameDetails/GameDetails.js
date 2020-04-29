import React from "react";

import styles from "./GameDetails.module.css";

const GameDetails = (props) => {
  const toDateTime = (secs) => {
    let t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    return t;
  };

  let releaseDates = [],
    gameModes = [],
    gameEngines = [];

  props.releaseDates.forEach((releaseDate) => {
    releaseDates.push(
      <p key={releaseDate.id} className={styles.detailEntry}>
        {toDateTime(releaseDate.created_at).toDateString()} -{" "}
        {releaseDate.platform.name}
      </p>
    );
  });

  if (props.gameModes) {
    props.gameModes.forEach((gameMode) => {
      gameModes.push(
        <p key={gameMode.id} className={styles.detailEntry}>
          {gameMode.name}
        </p>
      );
    });
  }

  props.game_engines.forEach((gameEngine) => {
    gameEngines.push(
      <p key={gameEngine.id} className={styles.detailEntry}>
        {gameEngine.name}
      </p>
    );
  });

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

      {props.franchise ? (
        <div className={styles.detailSection}>
          <p className={styles.title}>Franchise: </p>
          {props.franchise}
        </div>
      ) : null}

      <div className={styles.detailSection}>
        <p className={styles.title}>Game Engines: </p>
        {gameEngines}
      </div>
    </div>
  );
};

export default GameDetails;
