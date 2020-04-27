import React, { Component } from "react";
import axios from "axios";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverDisplay2Container from "../../components/GameCoverDisplay2Container/GameCoverDisplay2Container";

import styles from "./GameSearchPage.module.css";

class GameSearchPage extends Component {
  state = { games: [] };

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api-v3.igdb.com/games?search=${this.props.searchTerm}&fields=cover.url,name,genres.name,storyline,summary,rating`;

    axios
      .get(proxyurl + url)
      .then((res) => {
        console.log(res.data);
        this.setState({ games: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
