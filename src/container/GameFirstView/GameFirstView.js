import React, { Component } from "react";

import RatingBox from "../../components/RatingBox/RatingBox";

import noCover from "../../assets/images/noCover.jpg";

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

  getOfficialWebsite = (websites) => {
    for (const website of websites) {
      if (website.category === 1) {
        return website.url;
      }
    }
    return websites[0].url;
  };

  onBackToSearch = () => {
    this.props.onBackToSearch();
  };

  render() {
    const gameInfo = this.props.gameInfo;

    return (
      <div className={styles.gameFirstView}>
        {this.props.fromSearch ? (
          <button
            onClick={() => this.onBackToSearch()}
            className={styles.goBackButton}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
        ) : null}

        <div className={styles.wideContainer}>
          <div className={styles.container}>
            <div className={styles.smallDetail}>
              {gameInfo.cover ? (
                <img
                  src={
                    "https:" +
                    gameInfo.cover.url.replace("t_thumb", "t_cover_big")
                  }
                  alt="Cover"
                  className={styles.cover}
                />
              ) : (
                <img
                  src={noCover}
                  alt="No cover found"
                  className={styles.cover}
                />
              )}
              <div className={styles.detailListContainer}>
                <div className={styles.detailList}>
                  <p>
                    {gameInfo.genres ? (
                      <React.Fragment>
                        <span className={styles.title}>Genres: </span>
                        {gameInfo.genres
                          .map((genre) => {
                            return genre.name;
                          })
                          .join(", ")}
                      </React.Fragment>
                    ) : (
                      "No genre available"
                    )}
                  </p>
                </div>
                <div className={styles.detailList}>
                  <p>
                    {gameInfo.themes ? (
                      <React.Fragment>
                        <span className={styles.title}>Themes: </span>
                        {gameInfo.themes
                          .map((theme) => {
                            return theme.name;
                          })
                          .join(", ")}
                      </React.Fragment>
                    ) : (
                      "No genre available"
                    )}
                  </p>
                </div>
                <div className={styles.detailList}>
                  <p>
                    {gameInfo.platforms ? (
                      <React.Fragment>
                        <span className={styles.title}>Platforms: </span>
                        {gameInfo.platforms
                          .map((platform) => {
                            return platform.name;
                          })
                          .join(", ")}
                      </React.Fragment>
                    ) : (
                      "No platforms available"
                    )}
                  </p>
                </div>
                {gameInfo.websites ? (
                  <a
                    href={this.getOfficialWebsite(gameInfo.websites)}
                    target="_blank"
                    className={styles.websiteLink}
                  >
                    Visit the official website
                  </a>
                ) : (
                  "Official website not available"
                )}
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
                {gameInfo.involved_companies ? (
                  <p>{gameInfo.involved_companies[0].company.name}</p>
                ) : null}
              </div>
              <div className={styles.aboutInfo}>
                {gameInfo.storyline ? <p>{gameInfo.storyline}</p> : null}
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
