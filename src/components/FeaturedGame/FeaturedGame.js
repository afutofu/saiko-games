import React from "react";

import styles from "./FeaturedGame.module.css";

const FeaturedGame = (props) => {
  return (
    <div className={styles.featuredGame}>
      <div className={styles.container}>
        <img
          src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1trn.jpg"
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

export default FeaturedGame;
