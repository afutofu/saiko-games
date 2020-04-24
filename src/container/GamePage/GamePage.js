import React, { Component } from "react";

import styles from "./GamePage.module.css";

class GamePage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.GamePage}>
        <img
          src="https://images.igdb.com/igdb/image/upload/t_1080p/hpisfx4wmws8ov1n9d1j.jpg"
          alt="screenshot"
          className={styles.background}
        />
        <div className={styles.background} />
        <div className={styles.firstView}>
          <div className={styles.wideContainer}>
            <div className={styles.container}>
              <div className={styles.smallDetail}>
                <img
                  src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1trn.jpg"
                  alt="Cover"
                  className={styles.cover}
                />
                <div className={styles.detailListContainer}>
                  <div className={styles.detailList}>
                    <p>
                      <span className={styles.title}>Genres: </span>
                      RPG, Adventure
                    </p>
                  </div>
                  <div className={styles.detailList}>
                    <p>
                      <span className={styles.title}>Themes: </span>
                      Action, Fanatasy, Sandbox, Open World
                    </p>
                  </div>
                  <div className={styles.detailList}>
                    <p>
                      <span className={styles.title}>Platforms: </span>
                      PC (Windows), Mac OS
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.about}>
                <p>
                  You have crashed. You are stranded. But you are not alone. The
                  Spiral Knights have awoken on an alien world. Their equipment
                  stores have been raided and their starship, The Skylark, will
                  not recover from the crash. Now they must work together to
                  survive on a journey that will take them to the very core of
                  the world.
                </p>
              </div>
              <div className={styles.ratings}>
                <div className={styles.rating}>External Critic</div>
                <div className={styles.rating}>Member Score</div>
                <div className={styles.rating}>Overall Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
