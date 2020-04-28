import React, { Component } from "react";

import TrendingGame from "../../components/TrendingGame/TrendingGame";
import GameScreenshotContainer from "../../components/GameScreenshotContainer/GameScreenshotContainer";

import styles from "./TrendingGamesContainer.module.css";

class TrendingGameContainer extends Component {
  state = { TrendingGame: {}, GameScreenshot: {} };

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  renderContent = () => {
    const games = this.props.games;
    const game = games[0];
    let genres = [];

    if (games.genres) {
      games.genres.forEach((genre) => genres.push(genre));
    }

    return (
      <div className={styles.trendingGame}>
        <TrendingGame
          onGameClick={this.onGameClick}
          cover={
            game.cover.url
              ? "https:" + game.cover.url.replace("t_thumb", "t_cover_big")
              : null
          }
          screenshot={
            game.screenshots !== null
              ? "https:" +
                game.screenshots[0].url.replace("t_thumb", "t_screenshot_med")
              : "https://images.igdb.com/igdb/image/upload/t_screenshot_med/muv70yw3rds1cw8ymr5v.jpg"
          }
          name={game.name}
          genres={genres.join(" ")}
          storyline={game.storyline ? game.storyline : game.summary}
        />
        <GameScreenshotContainer
          games={games.slice(1, games.length)}
          onGameClick={this.onGameClick}
        />
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default TrendingGameContainer;
