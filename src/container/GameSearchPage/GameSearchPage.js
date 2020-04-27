import React, { Component } from "react";
import axios from "axios";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverDisplay2Container from "../../components/GameCoverDisplay2Container/GameCoverDisplay2Container";

import styles from "./GameSearchPage.module.css";

class GameSearchPage extends Component {
  state = { games: [], loading: true };

  componentDidMount() {
    this.getGames(this.props.searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.setState({ loading: true });
      this.getGames(nextProps.searchTerm);
    }
  }

  getGames = (searchTerm) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api-v3.igdb.com/games?search=${searchTerm}&fields=cover.url,name,genres.name,storyline,summary,rating`;

    axios
      .get(proxyurl + url)
      .then((res) => {
        this.setState({ games: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  onGameClick = (gameId) => {
    this.props.onGameClick(gameId);
  };

  render() {
    return (
      <div className={styles.gameSearchPage}>
        <img
          className={styles.backgroundImage}
          src="https://images.igdb.com/igdb/image/upload/t_1080p/qifkxxpckhq4wyxgquqe.jpg"
          alt="bg"
        />
        <div className={styles.background} />
        <div className={styles.container}>
          <SectionTitle
            title={`games matched with "${this.props.searchTerm}"`}
          />
          {!this.state.loading ? (
            <GameCoverDisplay2Container
              onGameClick={this.onGameClick}
              games={this.state.games}
            />
          ) : null}
        </div>
        {this.state.loading ? (
          <div className={styles.spinner}>
            <div className={styles.rect1}></div>
            <div className={styles.rect2}></div>
            <div className={styles.rect3}></div>
            <div className={styles.rect4}></div>
            <div className={styles.rect5}></div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default GameSearchPage;
