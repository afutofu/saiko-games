import React, { Component } from "react";

import RatingBox from "../../components/RatingBox/RatingBox";

import styles from "./GameFirstView.module.css";

class GameFirstView extends Component {
  state = {};
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
                    PC (Windows), Mac OS
                  </p>
                </div>
                <a className={styles.websiteLink}>Visit the official website</a>
              </div>
            </div>
            <div className={styles.about}>
              <h1 className={styles.title}>{gameInfo.name}</h1>
              <div className={styles.secondaryInfo}>
                <p>20th Jan 2020 30 days ago</p>
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
