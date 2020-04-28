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
    trendingGames: [],
  };

  componentDidMount() {
    this.getGames();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.key !== this.props.key) {
      this.setState({ loading: true });
      this.getGames();
    }
  }

  getGames = () => {
    // Getting featured games for trailing 6 months
    let body = `fields name, genres.name, cover.url, storyline, summary, screenshots.url, videos.video_id; sort popularity desc; where total_rating > 89 & category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 15778800
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 3;`;

    // this.fetchData(body)
    //   .then((data) => {
    //     const background =
    //       "https:" + data[0].screenshots[1].url.replace("t_thumb", "t_1080p");
    //     this.setState({ loading: false, background, featuredGames: data });
    //   })
    //   .catch((err) => console.log(err));

    // Getting latest games between now and one month ago
    body = `fields name, genres.name, cover.url, total_rating; sort first_release_date desc;where category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 2629800
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 5;`;

    // this.fetchData(body)
    //   .then((data) => this.setState({ latestReleases: data }))
    //   .catch((err) => console.log(err));

    // Get data for trending games from trailing 2 months
    body = `fields name, genres.name, cover.url, screenshots.url, total_rating, storyline, summary; sort popularity desc; where category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 5259600
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 4;`;

    // this.fetchData(body)
    //   .then((data) => this.setState({ trendingGames: data }))
    //   .catch((err) => console.log(err));
  };

  fetchData = async (body) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/",
      url = `https://api-v3.igdb.com/games`;

    const res = await axios.post(proxyurl + url, body);
    return res.data;
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
          {this.state.trendingGames.length > 0 ? (
            <TrendingGamesContainer
              games={this.state.trendingGames}
              onGameClick={this.onGameClick}
            />
          ) : null}
        </div>
        {this.state.featuredGames.length > 0 ? (
          <VideoContainer games={this.state.featuredGames} />
        ) : null}

        <div className={styles.container}>
          {/* <SectionTitle title="highest rated games" big />
          <SectionTitle title="past years" color="#DED375" />
          <GameScreenshotContainer games={3} onGameClick={this.onGameClick} />
          <SectionTitle title="past 5 years" color="#DED375" />
          <GameScreenshotContainer games={3} onGameClick={this.onGameClick} />
          <SectionTitle title="all time" color="#DED375" />
          <GameScreenshotContainer games={3} onGameClick={this.onGameClick} /> */}
        </div>
      </div>
    );
  }
}

export default FrontPage;
