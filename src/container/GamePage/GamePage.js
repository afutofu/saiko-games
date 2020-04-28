import React, { Component } from "react";
import axios from "axios";

import GameFirstView from "../GameFirstView/GameFirstView";
import VideoContainer from "../VideoContainer/VideoContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverContainer from "../../components/GameCoverContainer/GameCoverContainer";
import GameDetails from "../../components/GameDetails/GameDetails";
import ReviewContainer from "../ReviewContainer/ReviewContainer";

import styles from "./GamePage.module.css";
import Axios from "axios";

class GamePage extends Component {
  state = { loading: true, gameInfo: null };

  componentDidMount() {
    this.getGameInfo(this.props.gameId);
  }

  getGameInfo = () => {
    console.log(this.props.gameId);

    const proxyurl = "https://cors-anywhere.herokuapp.com/",
      url = `https://api-v3.igdb.com/games`;

    const body = `fields id,name,cover,cover.url, collection.name,genres.name, themes.name, first_release_date, storyline, summary, platforms.name, aggregated_rating, rating, total_rating, screenshots.url, videos.video_id,involved_companies.*, involved_companies.company.name, game_engines.name, similar_games.name, websites.url; where id = ${this.props.gameId};`;

    axios
      .post(proxyurl + url, body)
      .then((res) => {
        console.log(res.data[0]);
        this.setState({ loading: false, gameInfo: res.data[0] });
      })
      .catch((err) => console.log(err));
  };

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  renderContent = () => {
    const gameInfo = this.state.gameInfo;

    if (this.state.loading) {
      return <div className={styles.gamePage}></div>;
    }

    return (
      <div className={styles.gamePage}>
        <img
          src={
            "https:" + gameInfo.screenshots[0].url.replace("t_thumb", "t_1080p")
          }
          alt="screenshot"
          className={styles.backgroundImage}
        />
        <div className={styles.background} />
        <GameFirstView gameInfo={this.state.gameInfo} />
        <VideoContainer gameInfo={this.state.gameInfo} gamePage />
        <div className={styles.container}>
          <SectionTitle title="recommendations" />
          {/* <GameCoverContainer games={4} onGameClick={this.onGameClick} /> */}
          <div className={styles.reviewsDetails}>
            <div className={styles.reviews}>
              <SectionTitle title="reviews" />
              <ReviewContainer reviews={Math.random() * 15} />
            </div>
            <div className={styles.details}>
              <SectionTitle title="details" />
              <GameDetails
                releaseDates={5}
                gameModes={3}
                series={1}
                franchises={1}
                gameEngine={2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default GamePage;
