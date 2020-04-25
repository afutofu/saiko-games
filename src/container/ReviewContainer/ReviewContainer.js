import React, { Component } from "react";

import Review from "../../components/Review/Review";

import styles from "./ReviewContainer.module.css";

class ReviewContainer extends Component {
  constructor(props) {
    super(props);

    let reviews = [],
      visibleReviews = [],
      index = 0;

    for (let i = 0; i < props.reviews; i++) {
      reviews.push(<Review />);
    }

    for (let i = 0; i < reviews.length; i++) {
      if (i === 5) {
        break;
      }
      visibleReviews.push(<Review />);
      index++;
    }

    this.state = {
      reviews: reviews,
      visibleReviews: visibleReviews,
      reviewIndex: index,
    };
  }

  onLoadMoreClick = () => {
    let newVisibleReviews = [],
      newIndex = 0;

    const { reviews, visibleReviews, reviewIndex } = this.state;

    for (newIndex; newIndex < reviewIndex + 5; newIndex++) {
      if (newIndex > reviews.length) {
        break;
      }
      newVisibleReviews.push(reviews[newIndex]);
    }

    this.setState({ visibleReviews: newVisibleReviews, reviewIndex: newIndex });
  };

  render() {
    const { reviews, visibleReviews, reviewIndex } = this.state;

    return (
      <div className={styles.reviewContainer}>
        <div className={styles.reviews}>{this.state.visibleReviews}</div>
        {console.log(reviews.length, reviewIndex)}
        {reviews.length > reviewIndex ? (
          <button
            className={styles.loadMoreButton}
            onClick={this.onLoadMoreClick}
          >
            Load More Reviews
          </button>
        ) : null}
      </div>
    );
  }
}

export default ReviewContainer;
