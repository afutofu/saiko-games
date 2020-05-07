import React, { Component } from "react";
import axios from "axios";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverDisplay2Container from "../../components/GameCoverContainer2/GameCoverContainer2";
import Spinner from "../../components/Spinner/Spinner";

import defaultBackground from "../../assets/images/defaultBackground.jpg";

import styles from "./GameSearchPage.module.css";

class GameSearchPage extends Component {
  state = { games: [], loading: true, errorCount: 0, background: null };

  componentDidMount() {
    this.getGames(this.props.location.state.searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.state.searchTerm !==
      this.props.location.state.searchTerm
    ) {
      this.setState({ loading: true });
      this.getGames(nextProps.location.state.searchTerm);
    }
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

  getGames = (searchTerm) => {
    // Getting featured games for trailing 6 months
    let body = `fields screenshots.url, artworks.url; sort popularity desc; where total_rating > 89 & category = 0 & first_release_date > ${
      Math.floor(Date.now() / 1000) - 15778800
    } & first_release_date < ${Math.floor(Date.now() / 1000)}; limit 1;`;

    this.fetchData(body)
      .then((data) => {
        let background = this.getBackgroundLink(data[0]);

        this.setState({
          background,
        });
      })
      .catch((err) => console.log(err));

    body = `search "${searchTerm}"; fields cover.url,name,genres.name,storyline,summary,total_rating; where category=0; limit 50;`;

    this.fetchData(body)
      .then((data) => {
        this.setState({ games: data, loading: false });
      })
      .catch((err) => {
        if (this.state.errorCount < 3) {
          this.setState({ errorCount: this.state.errorCount + 1 });
          setTimeout(() => this.setState(this.getGames()), 5000);
        } else {
          this.setState({ errorCount: 0 });
        }
      });
  };

  render() {
    if (this.state.loading) {
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
      <div className={styles.gameSearchPage}>
        {this.state.background ? (
          <img
            className={styles.backgroundImage}
            src={this.state.background}
            alt="No background found"
          />
        ) : (
          <img
            className={styles.backgroundImage}
            src={defaultBackground}
            alt="No background found"
          />
        )}

        <div className={styles.background} />
        <div className={styles.container}>
          <SectionTitle
            title={`games matched with "${this.props.location.state.searchTerm}`}
          />
          <GameCoverDisplay2Container games={this.state.games} />
        </div>
      </div>
    );
  }
}

export default GameSearchPage;
