import React, { Component } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedGame from "../../components/FeaturedGame/FeaturedGame";
import GameCoverDisplay from "../../components/GameCoverDisplay/GameCoverDisplay";
import TrendingGame from "../../components/TrendingGame/TrendingGame";
import GameScreenshotDisplay from "../../components/GameScreenshotDisplay/GameScreenshotDisplay";

import styles from "./Main.module.css";

class Main extends Component {
  state = {};

  renderContent = () => {
    return (
      <div className={styles.main}>
        <img
          className={styles.backgroundImage}
          src="https://images.igdb.com/igdb/image/upload/t_1080p/qifkxxpckhq4wyxgquqe.jpg"
          alt="bg"
        />
        <div className={styles.background} />
        <div className={styles.container}>
          <SectionTitle title="featured" />
          <FeaturedGame
            name="Spiral Knights"
            genres={["RPG", "Adventure"]}
            storyline="You have crashed. You are stranded. But you are not alone. The Spiral Knights have awoken on an alien world. Their equipment stores have been 
            raided and their starship, The Skylark, will not recover from the crash. Now they must work together to survive on a journey that will take them to the 
            very core of the world."
          />
          <SectionTitle title="latest releases" />
          <GameCoverDisplay
            name="Minecraft"
            genre={["Simulator", "Strategy"][0]}
            rating="89"
          />
          <SectionTitle title="trending" />
          <TrendingGame
            name="Mount & Blade: Bannerlord"
            genres={["RPG", "Action", "Simulator"]}
            storyline="Mount & Blade II: Bannerlord is the eagerly awaited sequel to the acclaimed medieval combat simulator and role-playing game Mount & Blade: Warband. Set 200 years before, it expands both the detailed fighting system and the world of Calradia. Bombard mountain fastnesses with siege engines, establish secret criminal empires in the back alleys of cities, or charge into the thick of chaotic battles in your quest for power."
          />
          <GameScreenshotDisplay
            name="Skyrim"
            genre={["Action", "Fantasy"][0]}
            rating="96"
          />
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Main;
