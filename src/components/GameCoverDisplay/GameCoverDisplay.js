import React from "react";

import styles from "./GameCoverDisplay.module.css";

const GameCoverDisplay = (props) => {
  return (
    <div className={styles.gameCoverDisplay}>
      <img
        src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7j.jpg"
        className={styles.cover}
        alt="cover"
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.genre}>{props.genre}</p>
        <h3 className={styles.rating}>{props.rating}</h3>
      </div>
    </div>
  );
};

export default GameCoverDisplay;
