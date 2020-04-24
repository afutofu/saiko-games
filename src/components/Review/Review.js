import React from "react";

import styles from "./Review.module.css";

const Review = (props) => {
  return (
    <div className={styles.review}>
      <div className={styles.info}>
        <div className={styles.picture} />
        <h3 className={styles.username}>Bob Marley</h3>
      </div>
      <p className={styles.userReview}>
        laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo
        necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente
        accusantium
      </p>
    </div>
  );
};

export default Review;
