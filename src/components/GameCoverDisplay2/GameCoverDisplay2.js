import React from "react";

import styles from "./GameCoverDisplay2.module.css";

const GameCoverDisplay2 = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  return (
    <div onClick={() => onGameClick(1)} className={styles.gameCoverDisplay}>
      <img
        src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7j.jpg"
        className={styles.cover}
        alt="cover"
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.genres}>{props.genres.join(" ")}</p>
        <p className={styles.storyline}>{props.storyline}</p>
        <h3 className={styles.rating}>{props.rating}</h3>
      </div>
    </div>
  );
};

export default GameCoverDisplay2;
