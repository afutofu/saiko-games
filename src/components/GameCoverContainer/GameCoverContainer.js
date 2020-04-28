import React, { Component } from "react";

import GameCoverDisplay from "../GameCoverDisplay/GameCoverDisplay";

import styles from "./GameCoverContainer.module.css";

class GameCoverContainer extends Component {
  state = {};

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  renderContent = () => {
    let games = [];

    this.props.games.forEach((game) => {
      games.push(
        <GameCoverDisplay
          onGameClick={this.onGameClick}
          key={game.id}
          cover={
            game.cover !== null
              ? "https:" + game.cover.url.replace("t_thumb", "t_cover_big")
              : "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7j.jpg"
          }
          name={game.name}
          genre={game.genres ? game.genres[0].name : null}
          rating={game.total_rating ? Math.round(game.total_rating) : null}
        />
      );
    });

    // for (let i = 0; i < this.props.games; i++) {
    //   games.push(
    //     <GameCoverDisplay
    //       onGameClick={this.onGameClick}
    //       key={i}
    //       name="Minecraft"
    //       genre={["Simulator", "Strategy"][0]}
    //       rating="89"
    //     />
    //   );
    // }

    return <div className={styles.gameCoverContainer}>{games}</div>;
  };

  render() {
    return this.renderContent();
  }
}

export default GameCoverContainer;
