import React, { Component } from "react";

import styles from "./RatingBox.module.css";

class RatingBox extends Component {
  state = { mounted: false };

  percentageToColor(perc) {
    var r,
      g,
      b = 0;
    if (perc < 50) {
      r = 255;
      g = Math.round(5.1 * perc);
    } else {
      g = 255;
      r = Math.round(510 - 5.1 * perc);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return "#" + ("000000" + h.toString(16)).slice(-6);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    let ratingStyles = [styles.rating];
    let ratingBarStyles = [styles.ratingBar];

    if (this.state.mounted) {
      switch (this.props.delay) {
        case 1:
          ratingStyles.push(styles.fadeIn1);
          ratingBarStyles.push(styles.slideIn1);
          break;
        case 2:
          ratingStyles.push(styles.fadeIn2);
          ratingBarStyles.push(styles.slideIn2);
          break;
        case 3:
          ratingStyles.push(styles.fadeIn3);
          ratingBarStyles.push(styles.slideIn3);
          break;
        default:
          return null;
      }
    }

    return (
      <div className={styles.ratingBox}>
        <p className={styles.title}>{this.props.title}</p>
        <p className={ratingStyles.join(" ")}>{this.props.rating}</p>
        <div
          className={ratingBarStyles.join(" ")}
          style={{
            width: `${this.props.rating}%`,
            background: `${this.percentageToColor(this.props.rating)}`,
          }}
        />
      </div>
    );
  }
}

export default RatingBox;
