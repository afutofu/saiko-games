import React from "react";

import noCover from "../../assets/images/noCover.jpg";

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
      {props.cover ? (
        <img src={props.cover} alt="No cover found" className={styles.cover} />
      ) : (
        <img src={noCover} alt="No cover found" className={styles.cover} />
      )}

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
