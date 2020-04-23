import React, { Component } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedGame from "../../components/FeaturedGame/FeaturedGame";
import GameCoverContainer from "../GameCoverContainer/GameCoverContainer";
import TrendingGamesContainer from "../TrendingGamesContainer/TrendingGamesContainer";
import VideoContainer from "../VideoContainer/VideoContainer";
import GameScreenshotContainer from "../../components/GameScreenshotContainer/GameScreenshotContainer";

import styles from "./FrontPage.module.css";

class FrontPage extends Component {
  state = {};

  render() {
    return (
      <div className={styles.frontPage}>
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
          <GameCoverContainer games={4} />
          <SectionTitle title="trending" />
          <TrendingGamesContainer games={3} />
        </div>
        <VideoContainer videos={3} />
        <div className={styles.container}>
          <SectionTitle title="highest rated games" big />
          <SectionTitle title="past years" color="#DED375" />
          <GameScreenshotContainer games={3} />
          <SectionTitle title="past 5 years" color="#DED375" />
          <GameScreenshotContainer games={3} />
          <SectionTitle title="all time" color="#DED375" />
          <GameScreenshotContainer games={3} />
        </div>
      </div>
    );
  }
}

export default FrontPage;
