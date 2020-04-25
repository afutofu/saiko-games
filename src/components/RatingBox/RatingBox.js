import React from "react";

import styles from "./RatingBox.module.css";

const RatingBox = (props) => {
  return (
    <div className={styles.ratingBox}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.ratingBar} />
    </div>
  );
};

export default RatingBox;
