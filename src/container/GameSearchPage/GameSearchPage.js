import React, { Component } from "react";
import axios from "axios";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverDisplay2Container from "../../components/GameCoverDisplay2Container/GameCoverDisplay2Container";
import Spinner from "../../components/Spinner/Spinner";

import defaultBackground from "../../assets/images/defaultBackground.jpg";

import styles from "./GameSearchPage.module.css";

class GameSearchPage extends Component {
  state = { games: [], loading: true, errorCount: 0 };

  componentDidMount() {
    this.getGames(this.props.searchTerm);
  }

  componentDidUpdate() {
    if (this.props.searchPosition) {
      window.scrollTo(0, this.props.searchPosition);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.setState({ loading: true });
      this.getGames(nextProps.searchTerm);
    }
  }

  getGames = (searchTerm) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api-v3.igdb.com/games";

    const body = `search "${searchTerm}"; fields cover.url,name,genres.name,storyline,summary,total_rating; where category=0; limit 50;`;

    axios
      .post(proxyurl + url, body)
      .then((res) => {
        this.setState({ games: res.data, loading: false });
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

  onGameClick = (gameId) => {
    this.props.setSearchPosition(window.pageYOffset);
    this.props.onGameClick(gameId);
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
        {this.props.background ? (
          <img
            className={styles.backgroundImage}
            src={this.props.background}
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
            title={`games matched with "${this.props.searchTerm}"`}
          />
          <GameCoverDisplay2Container
            onGameClick={this.onGameClick}
            games={this.state.games}
          />
        </div>
      </div>
    );
  }
}

export default GameSearchPage;
