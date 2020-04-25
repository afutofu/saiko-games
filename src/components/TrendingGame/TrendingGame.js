import React from "react";

import styles from "./TrendingGame.module.css";

const TrendingGame = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  return (
    <div onClick={() => onGameClick(1)} className={styles.trendingGame}>
      <img
        src="https://images.igdb.com/igdb/image/upload/t_screenshot_med/ozg4wanokhst4uehgkxs.jpg"
        alt="screenshot"
        className={styles.screenshot}
      />
      <div className={styles.container}>
        <img
          src="https://images.igdb.com/igdb/image/upload/t_cover_big/zvicevewoj0hfcqjaqx6.jpg"
          alt="Cover"
          className={styles.cover}
        />
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>{props.name}</h1>
          <h3 className={styles.genres}>{props.genres.join(", ")}</h3>
          <p className={styles.storyline}>{props.storyline}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingGame;
