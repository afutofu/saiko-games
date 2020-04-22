import React, { Component } from "react";

import styles from "./VideosContainer.module.css";

class VideosContainer extends Component {
  state = {};
  containerRef = React.createRef();
  //   videoRef = React.createRef();

  componentDidMount() {
    console.log(this.containerRef.current.style);
    // console.log(this.videoRef.current.style);
    // this.myRef.current.style.transform = `translateX(-50vw)`;
  }

  renderContent = () => {
    let videos = [];

    for (let i = 0; i < this.props.videos; i++) {
      videos.push(
        <iframe
          //   ref={this.videoRef}
          title={i}
          key={i}
          className={styles.video}
          src="https://www.youtube.com/embed/P7OQRA2kDyE"
        ></iframe>
      );
    }

    return (
      <div className={styles.videosContainer} ref={this.containerRef}>
        {videos}
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default VideosContainer;
