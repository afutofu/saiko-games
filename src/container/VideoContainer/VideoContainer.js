import React, { Component } from "react";

import styles from "./VideoContainer.module.css";

class VideosContainer extends Component {
  constructor(props) {
    super(props);

    let videos = [];

    for (let i = 0; i < props.videos; i++) {
      videos.push(
        <iframe
          index={i}
          title={i}
          key={i}
          className={styles.video}
          src="https://www.youtube.com/embed/P7OQRA2kDyE"
        ></iframe>
      );
    }

    this.state = { videos: videos, video: videos[0] };
  }

  componentDidMount() {}

  onNextVideo = () => {
    const newIndex = this.state.video.props.index + 1;
    console.log(newIndex);
    this.setState({ video: this.state.videos[newIndex] });
  };

  onPrevVideo = () => {
    const newIndex = this.state.video.props.index - 1;
    console.log(newIndex);
    this.setState({ video: this.state.videos[newIndex] });
  };

  renderContent = () => {
    const { videos, video } = this.state;

    return (
      <div className={styles.videosContainer}>
        <div className={styles.buttons}>
          {video.props.index === 0 ? (
            <div />
          ) : (
            <button onClick={this.onPrevVideo}>
              <i class="fa fa-chevron-left"></i>
            </button>
          )}
          {video.props.index === videos.length - 1 ? (
            <div />
          ) : (
            <button onClick={this.onNextVideo}>
              <i class="fa fa-chevron-right"></i>
            </button>
          )}
        </div>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${video.props.index * 100}%)`,
          }}
        >
          {videos}
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default VideosContainer;
