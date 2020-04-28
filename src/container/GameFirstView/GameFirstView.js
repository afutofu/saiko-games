import React, { Component } from "react";

import RatingBox from "../../components/RatingBox/RatingBox";

import styles from "./GameFirstView.module.css";

class GameFirstView extends Component {
  state = {};

  toDateTime = (secs) => {
    let t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    return t;
  };

  dayDifference = () => {
    const currentTime = Math.floor(Date.now() / 1000);
    const releaseTime = this.props.gameInfo.first_release_date;
    const timeDifference = currentTime - releaseTime;
    const days = Math.floor(timeDifference / (3600 * 24));
    return days;
  };

  render() {
    const gameInfo = this.props.gameInfo;

    return (
      <div className={styles.gameFirstView}>
        <div className={styles.wideContainer}>
          <div className={styles.container}>
            <div className={styles.smallDetail}>
              <img
                src={
                  "https:" +
                  gameInfo.cover.url.replace("t_thumb", "t_cover_big")
                }
                alt="Cover"
                className={styles.cover}
              />
              <div className={styles.detailListContainer}>
                <div className={styles.detailList}>
                  <p>
                    <span className={styles.title}>Genres: </span>
                    {gameInfo.genres
                      .map((genre) => {
                        return genre.name;
                      })
                      .join(", ")}
                  </p>
                </div>
                <div className={styles.detailList}>
                  <p>
                    <span className={styles.title}>Themes: </span>
                    {gameInfo.themes
                      .map((theme) => {
                        return theme.name;
                      })
                      .join(", ")}
                  </p>
                </div>
                <div className={styles.detailList}>
                  <p>
                    <span className={styles.title}>Platforms: </span>
                    {gameInfo.platforms
                      .map((platform) => {
                        return platform.name;
                      })
                      .join(", ")}
                  </p>
                </div>
                <a
                  href={gameInfo.websites[0].url}
                  target="_blank"
                  className={styles.websiteLink}
                >
                  Visit the official website
                </a>
              </div>
            </div>
            <div className={styles.about}>
              <h1 className={styles.title}>{gameInfo.name}</h1>
              <div className={styles.secondaryInfo}>
                <p>
                  <span>
                    {this.toDateTime(
                      gameInfo.first_release_date
                    ).toDateString()}
                  </span>
                  <span className={styles.daysAgo}>
                    {this.dayDifference()} days ago
                  </span>
                </p>
                <p>Studio X</p>
              </div>
              <div className={styles.aboutInfo}>
                <p>{gameInfo.storyline}</p>
                <p>{gameInfo.summary}</p>
              </div>
            </div>
            <div className={styles.ratings}>
              <RatingBox
                title="external critic"
                rating={Math.round(gameInfo.aggregated_rating)}
                delay={1}
              />
              <RatingBox
                title="member score"
                rating={Math.round(gameInfo.rating)}
                delay={2}
              />
              <RatingBox
                title="overall rating"
                rating={Math.round(gameInfo.total_rating)}
                delay={3}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameFirstView;
