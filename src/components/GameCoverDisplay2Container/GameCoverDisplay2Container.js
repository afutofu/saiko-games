import React from "react";

import GameCoverDisplay2 from "../GameCoverDisplay2/GameCoverDisplay2";

import styles from "./GameCoverDisplay2Container.module.css";

const GameCoverDisplay2Container = (props) => {
  const onGameClick = (gameId) => {
    props.onGameClick(gameId);
  };

  const renderGames = () => {
    let games = [];

    for (let i = 0; i < props.games; i++) {
      games.push(
        <div className={styles.game}>
          <GameCoverDisplay2
            onGameClick={onGameClick}
            name="Spiral Knights"
            genres={["RPG", "Adventure"]}
            storyline="You have crashed. You are stranded. But you are not alone. The Spiral Knights have awoken on an alien world. Their equipment stores have been 
          raided and their starship, The Skylark, will not recover from the crash. Now they must work together to survive on a journey that will take them to the 
          very core of the world."
            rating={81}
          />
        </div>
      );
    }

    return games;
  };

  return (
    <div className={styles.gameCoverDisplay2Container}>{renderGames()}</div>
  );
};

export default GameCoverDisplay2Container;
