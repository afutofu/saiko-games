import React, { Component } from "react";
import axios from "axios";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCoverDisplay2Container from "../../components/GameCoverDisplay2Container/GameCoverDisplay2Container";

import styles from "./GameSearchPage.module.css";

class GameSearchPage extends Component {
  state = { games: [], loading: true, errorCount: 0 };

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
    const url = "https://api-v3.igdb.com/games";

    const body = `search "${searchTerm}"; fields cover.url,name,genres.name,storyline,summary,rating;`;

    axios
      .post(proxyurl + url, body)
      .then((res) => {
        console.log(res.data);
        this.setState({ games: res.data, loading: false });
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

  render() {
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
            src="https://images.igdb.com/igdb/image/upload/t_1080p/qifkxxpckhq4wyxgquqe.jpg"
            alt="No background found"
          />
        )}

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
