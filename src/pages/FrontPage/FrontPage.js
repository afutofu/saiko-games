import React, { Component } from "react";
import axios from "axios";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedGame from "../../components/FeaturedGame/FeaturedGame";
import GameCoverContainer from "../../components/GameCoverContainer/GameCoverContainer";
import TrendingGamesContainer from "../../container/TrendingGamesContainer/TrendingGamesContainer";
import VideoContainer from "../../container/VideoContainer/VideoContainer";
import GameScreenshotContainer from "../../components/GameScreenshotContainer/GameScreenshotContainer";
import Spinner from "../../components/Spinner/Spinner";

import defaultBackground from "../../assets/images/defaultBackground.jpg";

import styles from "./FrontPage.module.css";

class FrontPage extends Component {
  state = {
    toBeLoaded: 6,
    loaded: 0,
    background: null,
    featuredGames: [],
    latestReleases: [],
    trendingGames: [],
    topPastYear: [],
    topPast5Years: [],
    topAllTime: [],
  };

  componentDidMount() {
    this.getGames();
  }

  getBackgroundLink = (game) => {
    if (
      game.screenshots &&
      game.screenshots !== null &&
      game.screenshots.length > 1
    ) {
      return "https:" + game.screenshots[1].url.replace("t_thumb", "t_1080p");
    } else if (game.artworks && game.artworks !== null) {
      return "https:" + game.artworks[0].url.replace("t_thumb", "t_1080p");
    } else {
      return defaultBackground;
    }
  };

  fetchData = async (body) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/",
      url = `https://api-v3.igdb.com/games`;

    const res = await axios.post(proxyurl + url, body);
    return res.data;
  };

  getGames = () => {
    // Getting featured games for trailing 6 months
    let body = `fields name, genres.name, cover.url, storyline, summary, screenshots.url, artworks.url, videos.name, videos.video_id; sort popularity desc; where total_rating > 89 & category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 15778800
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 5;`;

    this.fetchData(body)
      .then((data) => {
        let background = this.getBackgroundLink(data[0]);

        this.setState({
          loaded: this.state.loaded + 1,
          background,
          featuredGames: data,
        });
      })
      .catch((err) => console.log(err));

    // Getting latest games between now and one month ago
    body = `fields name, genres.name, cover.url, total_rating; sort first_release_date desc;where category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 2629800
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 4;`;

    this.fetchData(body)
      .then((data) =>
        this.setState({ loaded: this.state.loaded + 1, latestReleases: data })
      )
      .catch((err) => console.log(err));

    // Get data for trending games from trailing 2 months
    body = `fields name, genres.name, cover.url, screenshots.url, total_rating, storyline, summary; sort popularity desc; where category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 5259600
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 4;`;

    this.fetchData(body)
      .then((data) =>
        this.setState({ loaded: this.state.loaded + 1, trendingGames: data })
      )
      .catch((err) => console.log(err));

    // Get data for highest rated games for the past year
    body = `fields name, genres.name, screenshots.url, total_rating; sort total_rating desc; where total_rating > 50 & category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 31557600
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 3;`;

    this.fetchData(body)
      .then((data) =>
        this.setState({ loaded: this.state.loaded + 1, topPastYear: data })
      )
      .catch((err) => console.log(err));

    // Get data for highest rated games for the past 5 years
    body = `fields name, genres.name, screenshots.url, total_rating; sort total_rating desc; where total_rating > 50 & total_rating_count > 25 & category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 157788000
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 3;`;

    this.fetchData(body)
      .then((data) =>
        this.setState({ loaded: this.state.loaded + 1, topPast5Years: data })
      )
      .catch((err) => console.log(err));

    // Get data for highest rated games of all time
    body = `fields name, genres.name, screenshots.url, total_rating, total_rating_count; sort total_rating desc; where total_rating > 50 & total_rating_count >= 50 & category = 0 & first_release_date < ${Math.floor(
      Date.now() / 1000
    )}; limit 3;`;

    this.fetchData(body)
      .then((data) =>
        this.setState({ loaded: this.state.loaded + 1, topAllTime: data })
      )
      .catch((err) => console.log(err));
  };

  render() {
    // If all items not loaded, display spinner
    if (this.state.loaded < this.state.toBeLoaded) {
      return (
        <div style={{ height: "100vh" }}>
          <img
            className={styles.backgroundImage}
            src={defaultBackground}
            alt="No background available"
          />
          <Spinner />
          <div className={styles.background} />
        </div>
      );
    }

    return (
      <div className={styles.frontPage}>
        {this.state.featuredGames.length > 0 ? (
          <img
            className={styles.backgroundImage}
            src={this.state.background}
            alt="No background available"
          />
        ) : (
          <img
            className={styles.backgroundImage}
            src={defaultBackground}
            alt="No background available"
          />
        )}

        <div className={styles.background} />
        <div className={styles.container}>
          <SectionTitle title="featured" />
          {this.state.featuredGames.length > 0 ? (
            <FeaturedGame game={this.state.featuredGames[0]} />
          ) : null}

          <SectionTitle title="latest releases" />
          {this.state.latestReleases.length > 0 ? (
            <GameCoverContainer games={this.state.latestReleases} />
          ) : null}
          <SectionTitle title="trending" />
          {this.state.trendingGames.length > 0 ? (
            <TrendingGamesContainer games={this.state.trendingGames} />
          ) : null}
        </div>
        {this.state.featuredGames.length > 0 ? (
          <VideoContainer games={this.state.featuredGames} />
        ) : null}

        <div className={styles.container}>
          <SectionTitle title="highest rated games" big />
          <SectionTitle title="past year" color="#DED375" />
          <GameScreenshotContainer games={this.state.topPastYear} />
          <SectionTitle title="past 5 years" color="#DED375" />
          <GameScreenshotContainer games={this.state.topPast5Years} />
          <SectionTitle title="all time" color="#DED375" />
          <GameScreenshotContainer games={this.state.topAllTime} />
        </div>
      </div>
    );
  }
}

export default FrontPage;
