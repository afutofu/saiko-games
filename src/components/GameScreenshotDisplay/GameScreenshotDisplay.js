import React from "react";

import styles from "./GameScreenshotDisplay.module.css";

const GameScreenshotDisplay = (props) => {
  return (
    <div className={styles.gameScreenshotDisplay}>
      <img
        className={styles.screenshot}
        src="https://images.igdb.com/igdb/image/upload/t_screenshot_med/muv70yw3rds1cw8ymr5v.jpg"
        alt="screenshot"
      />
      <div className={styles.background}>
        <div className={styles.infoContainer}>
          <div className={styles.nameGenre}>
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.genre}>{props.genre}</p>
          </div>

          <h3 className={styles.rating}>{props.rating}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameScreenshotDisplay;
