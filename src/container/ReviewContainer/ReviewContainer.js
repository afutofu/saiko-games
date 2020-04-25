import React, { Component } from "react";

import Review from "../../components/Review/Review";

import styles from "./ReviewContainer.module.css";

class ReviewContainer extends Component {
  constructor(props) {
    super(props);

    let reviews = [];
    let visibleReviews = [];

    for (let i = 0; i < props.reviews; i++) {
      reviews.push(<Review />);
      console.log(i);
    }

    console.log(reviews);

    for (let i = 0; i < reviews.length; i++) {
      if (i === 5) {
        break;
      }
      visibleReviews.push(<Review />);
    }

    this.state = { reviews: props.reviews, visibleReviews: visibleReviews };
  }

  render() {
    return (
      <div className={styles.reviewContainer}>{this.state.visibleReviews}</div>
    );
  }
}

export default ReviewContainer;
