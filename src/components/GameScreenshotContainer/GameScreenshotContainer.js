import React from "react";

import GameScreenshotDisplay from "../GameScreenshotDisplay/GameScreenshotDisplay";

import styles from "./GameScreenshotContainer.module.css";

const GameScreenshotContainer = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  const renderContent = () => {
    let games = [];

    props.games.forEach((game) => {
      games.push(
        <GameScreenshotDisplay
          onGameClick={onGameClick}
          key={game.id}
          screenshot={
            game.screenshots !== null
              ? "https:" +
                game.screenshots[0].url.replace("t_thumb", "t_screenshot_med")
              : "https://images.igdb.com/igdb/image/upload/t_screenshot_med/muv70yw3rds1cw8ymr5v.jpg"
          }
          name={game.name}
          genre={game.genres[0] !== null ? game.genres.name : null}
          rating={game.total_rating ? Math.round(game.total_rating) : null}
        />
      );
    });

    return <div className={styles.gameScreenshotContainer}> {games}</div>;
  };

  return renderContent();
};

export default GameScreenshotContainer;
