import React, { Component } from "react";

import styles from "./VideoContainer.module.css";

class VideosContainer extends Component {
  constructor(props) {
    super(props);

    let videos = [];

    if (this.props.gamePage) {
      // If video container is used in game page
      this.props.gameInfo.videos.map((video, id) => {
        videos.push(
          <iframe
            index={id}
            title={video.id}
            key={video.id}
            className={styles.video}
            src={`https://www.youtube.com/embed/${video.video_id}`}
          ></iframe>
        );
      });
    } else {
      // If used in front page
      this.props.games.forEach((game, id) => {
        videos.push(
          <iframe
            index={id}
            title={game.videos.id}
            key={game.videos.id}
            className={styles.video}
            src={`https://www.youtube.com/embed/${game.videos[0].video_id}`}
          ></iframe>
        );
      });
    }

    this.state = { videos: videos, video: videos[0] };
  }

  componentDidMount() {}

  onNextVideo = () => {
    const newIndex = this.state.video.props.index + 1;
    this.setState({ video: this.state.videos[newIndex] });
  };

  onPrevVideo = () => {
    const newIndex = this.state.video.props.index - 1;
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
            <button onClick={this.onPrevVideo} className={styles.prevButton}>
              <i className="fa fa-chevron-left"></i>
            </button>
          )}
          {video.props.index === videos.length - 1 ? (
            <div />
          ) : (
            <button onClick={this.onNextVideo} className={styles.nextButton}>
              <i className="fa fa-chevron-right"></i>
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
