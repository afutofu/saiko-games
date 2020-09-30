import React from "react";

import faker, { random } from "faker";

import styles from "./Review.module.css";

const Review = (props) => {
  const reviewList = [
    "Good game!",
    "Not bad at all.",
    "Would play it again.",
    "Already one of my favorites.",
    "Awesome, I wonder if there will be a sequel.",
    "Love it!",
    "Recommended it to everyone in my workplace.",
    "Insanely addicting. Send help hahaha",
    "The world feels super immersive.",
    "10/10 would play again.",
    "A solid 8/10 for me",
    "Now this is my type of game",
    "Could be better.",
    "Complete waste of my time :(",
    "Thumbs down, not worth the time.",
    "If anyone is thinking of buying this game. Dont.",
    "Waited years for a month old game",
    "Dissapointing",
    "It wasnt forgettable, now I got something to talk about.",
  ];

  return (
    <div className={styles.review}>
      <div className={styles.info}>
        <img src={faker.internet.avatar()} alt="" className={styles.picture} />
        <h3 className={styles.username}>{faker.internet.userName()}</h3>
      </div>
      <p className={styles.userReview}>
        {reviewList[Math.round(Math.random() * reviewList.length)]}
      </p>
    </div>
  );
};

export default Review;
