import React, { Component } from "react";
import axios from "axios";

import GameFirstView from "../GameFirstView/GameFirstView";
import VideoContainer from "../VideoContainer/VideoContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverContainer from "../../components/GameCoverContainer/GameCoverContainer";
import GameDetails from "../../components/GameDetails/GameDetails";
import ReviewContainer from "../ReviewContainer/ReviewContainer";

import defaultBackground from "../../assets/images/defaultBackground.jpg";

import styles from "./GamePage.module.css";

class GamePage extends Component {
  state = { loading: true, gameInfo: null, errorCount: 0 };

  componentDidMount() {
    this.getGameInfo(this.props.gameId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameId !== this.props.gameId) {
      this.setState({ loading: true });
      this.getGameInfo(nextProps.gameId);
    }
  }

  getGameInfo = (gameId) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/",
      url = `https://api-v3.igdb.com/games`;

    const body = `fields id,name,cover,cover.url, collection.name,genres.name, themes.name, first_release_date, storyline, summary, platforms.name, aggregated_rating, rating, total_rating, screenshots.url, videos.video_id,involved_companies.*, involved_companies.company.name, game_engines.name, similar_games.name, similar_games.cover.url, similar_games.total_rating, similar_games.genres.name, websites.category, websites.url, game_modes.name, game_engines.name, franchise.name, release_dates.created_at, release_dates.platform.name, artworks.url; where id = ${gameId};`;

    axios
      .post(proxyurl + url, body)
      .then((res) => {
        console.log(res.data[0]);
        this.setState({ loading: false, gameInfo: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
        if (this.state.errorCount < 3) {
          this.setState({ errorCount: this.state.errorCount + 1 });
          setTimeout(() => this.setState(this.getGames()), 5000);
        } else {
          this.setState({ errorCount: 0 });
        }
      });
  };

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  renderBackground = (gameInfo) => {
    if (gameInfo.screenshots && gameInfo.screenshots !== null) {
      return (
        <img
          src={
            "https:" + gameInfo.screenshots[0].url.replace("t_thumb", "t_1080p")
          }
          alt="screenshot"
          className={styles.backgroundImage}
        />
      );
    } else if (gameInfo.artworks && gameInfo.artworks !== null) {
      return (
        <img
          src={
            "https:" + gameInfo.artworks[0].url.replace("t_thumb", "t_1080p")
          }
          alt="screenshot"
          className={styles.backgroundImage}
        />
      );
    } else {
      return (
        <img
          className={styles.backgroundImage}
          src={defaultBackground}
          alt="No background found"
        />
      );
    }
  };

  renderContent = () => {
    const gameInfo = this.state.gameInfo;

    if (this.state.loading) {
      return <div className={styles.gamePage}></div>;
    }

    console.log(gameInfo);

    return (
      <div className={styles.gamePage}>
        {this.renderBackground(gameInfo)}
        <div className={styles.background} />
        <GameFirstView gameInfo={gameInfo} />
        {gameInfo.videos ? (
          <VideoContainer gameInfo={gameInfo} gamePage />
        ) : (
          <div style={{ height: "30vh" }} />
        )}

        <div className={styles.container}>
          <SectionTitle title="recommendations" />
          <GameCoverContainer
            games={gameInfo.similar_games.slice(0, 4)}
            onGameClick={this.onGameClick}
          />
          <div className={styles.reviewsDetails}>
            <div className={styles.reviews}>
              <SectionTitle title="reviews" />
              <ReviewContainer reviews={Math.random() * 15} />
            </div>
            <div className={styles.details}>
              <SectionTitle title="details" />
              {console.log(gameInfo.franchise !== null)}
              <GameDetails
                releaseDates={gameInfo.release_dates}
                gameModes={gameInfo.game_modes}
                franchise={
                  gameInfo.franchise && gameInfo.franchise !== null
                    ? gameInfo.franchise.name
                    : null
                }
                gameEngines={gameInfo.game_engines}
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
