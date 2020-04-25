import React, { Component } from "react";

import styles from "./RatingBox.module.css";

class RatingBox extends Component {
  state = { mounted: false };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    let ratingBarStyles = [styles.ratingBar];

    if (this.state.mounted) {
      ratingBarStyles.push(styles.slideIn);
    }

    return (
      <div className={styles.ratingBox}>
        <p className={styles.title}>{this.props.title}</p>
        <p className={styles.rating}>{this.props.rating}</p>
        <div
          className={ratingBarStyles.join(" ")}
          style={{
            width: `${this.props.rating}%`,
          }}
        />
      </div>
    );
  }
}

export default RatingBox;
