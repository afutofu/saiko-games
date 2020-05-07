import React, { Component } from "react";

import Review from "../../components/Review/Review";

import styles from "./ReviewContainer.module.css";

class ReviewContainer extends Component {
  constructor(props) {
    super(props);

    let visibleReviews = [],
      index = 0;

    for (let i = 0; i < props.reviews; i++) {
      if (i === 5) {
        break;
      }
      visibleReviews.push(<Review key={i} />);
      index++;
    }

    this.state = {
      visibleReviews: visibleReviews,
      reviewIndex: index,
    };
  }

  onLoadMoreClick = () => {
    let newVisibleReviews = this.state.visibleReviews,
      newIndex = this.state.reviewIndex;

    const { reviewIndex } = this.state;

    for (newIndex; newIndex < reviewIndex + 5; newIndex++) {
      if (newIndex > this.props.reviews) {
        break;
      }
      newVisibleReviews.push(<Review key={newIndex} />);
    }

    this.setState({ visibleReviews: newVisibleReviews, reviewIndex: newIndex });
  };

  render() {
    const { reviewIndex } = this.state;

    return (
      <div className={styles.reviewContainer}>
        <div className={styles.reviews}>{this.state.visibleReviews}</div>
        {this.props.reviews === 0 ? <p>No reviews</p> : null}
        {this.props.reviews > reviewIndex ? (
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
