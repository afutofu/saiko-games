import React from "react";

import styles from "./FeaturedGame.module.css";

const FeaturedGame = (props) => {
  const renderContent = () => {
    const game = props.game,
      screenshot =
        "https:" + game.screenshots[0].url.replace("t_thumb", "t_1080p"),
      cover = "https:" + game.cover.url.replace("t_thumb", "t_cover_big");
    let genres = [];

    console.log(game);

    if (genres) {
      game.genres.forEach((genre) => {
        genres.push(genre.name);
      });
    }

    return (
      <div onClick={() => props.onGameClick(1)} className={styles.featuredGame}>
        <img src={screenshot} className={styles.screenshot} />
        <div className={styles.container}>
          <img src={cover} alt="Cover" className={styles.cover} />
          <div className={styles.infoContainer}>
            <h1 className={styles.name}>{game.name}</h1>
            <h3 className={styles.genres}>{genres.join(", ")}</h3>
            <p className={styles.storyline}>{game.storyline}</p>
          </div>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default FeaturedGame;
