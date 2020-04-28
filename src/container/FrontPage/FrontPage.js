import React, { Component } from "react";
import axios from "axios";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedGame from "../../components/FeaturedGame/FeaturedGame";
import GameCoverContainer from "../../components/GameCoverContainer/GameCoverContainer";
import TrendingGamesContainer from "../TrendingGamesContainer/TrendingGamesContainer";
import VideoContainer from "../VideoContainer/VideoContainer";
import GameScreenshotContainer from "../../components/GameScreenshotContainer/GameScreenshotContainer";

import styles from "./FrontPage.module.css";

class FrontPage extends Component {
  state = {
    loading: true,
    background: null,
    featuredGames: [],
    latestReleases: [],
  };

  componentDidMount() {
    console.log(Math.floor(Date.now() / 1000));
    this.getGames();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.key !== this.props.key) {
      this.setState({ loading: true });
      this.getGames();
    }
  }

  getGames = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/",
      url = `https://api-v3.igdb.com/games`,
      headers = {
        "user-key": "53a5ae29b1fdf5a3f7886a5ea6dceffd",
        "Content-Type": "text/plain",
      };
    // let body =
    //   "fields name, genres.name, cover.url, storyline, summary, screenshots.url, videos.video_id; sort popularity desc; where total_rating > 85 & category = 0 & first_release_date > 1585402200; limit 3;";

    // axios
    //   .post(proxyurl + url, body, {
    //     headers: headers,
    //   })
    //   .then((res) => {
    //     console.log("featured game data loaded");
    //     const background =
    //       "https:" +
    //       res.data[0].screenshots[1].url.replace("t_thumb", "t_1080p");
    //     this.setState({
    //       loading: false,
    //       background: background,
    //       featuredGames: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.getGames();
    //   });

    let body = `fields name, genres.name, cover.url, total_rating, first_release_date; sort first_release_date desc;where category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 2629800
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 5;`;

    axios
      .post(proxyurl + url, body, {
        headers: headers,
      })
      .then((res) => {
        console.log("latest games data loaded");
        console.log(res.data);
        this.setState({ latestReleases: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.getGames();
      });
  };

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  render() {
    return (
      <div className={styles.frontPage}>
        {this.state.featuredGames.length > 0 ? (
          <img
            className={styles.backgroundImage}
            src={this.state.background}
            alt="Background"
          />
        ) : (
          <img
            className={styles.backgroundImage}
            src="https://images.igdb.com/igdb/image/upload/t_1080p/qifkxxpckhq4wyxgquqe.jpg"
            alt="Background"
          />
        )}

        <div className={styles.background} />
        <div className={styles.container}>
          <SectionTitle title="featured" />
          {this.state.featuredGames.length > 0 ? (
            <FeaturedGame
              onGameClick={this.onGameClick}
              game={this.state.featuredGames[0]}
            />
          ) : null}

          <SectionTitle title="latest releases" />
          {this.state.latestReleases.length > 0 ? (
            <GameCoverContainer
              games={this.state.latestReleases}
              onGameClick={this.onGameClick}
            />
          ) : null}
          <SectionTitle title="trending" />
          <TrendingGamesContainer games={3} onGameClick={this.onGameClick} />
        </div>
        <VideoContainer videos={3} />
        <div className={styles.container}>
          <SectionTitle title="highest rated games" big />
          <SectionTitle title="past years" color="#DED375" />
          <GameScreenshotContainer games={3} onGameClick={this.onGameClick} />
          <SectionTitle title="past 5 years" color="#DED375" />
          <GameScreenshotContainer games={3} onGameClick={this.onGameClick} />
          <SectionTitle title="all time" color="#DED375" />
          <GameScreenshotContainer games={3} onGameClick={this.onGameClick} />
        </div>
      </div>
    );
  }
}

export default FrontPage;
