import React, { Component } from "react";

import styles from "./VideoContainer.module.css";

class VideosContainer extends Component {
  constructor(props) {
    super(props);

    let media = [];

    if (this.props.gamePage) {
      // If video container is used in game page
      const { gameInfo } = this.props;

      gameInfo.videos.map((video, id) => {
        media.push(
          <iframe
            index={id}
            title={video.id}
            key={video.id}
            className={styles.video}
            src={`https://www.youtube.com/embed/${video.video_id}`}
          ></iframe>
        );
      });

      let videoLength = media.length;
      if (gameInfo.screenshots) {
        gameInfo.screenshots.map((screenshot, id) => {
          media.push(
            <img
              index={videoLength + id}
              key={screenshot.id}
              className={styles.video}
              src={"https:" + screenshot.url.replace("t_thumb", "t_1080p")}
            />
          );
        });
      }

      videoLength = media.length;
      if (gameInfo.artworks) {
        gameInfo.artworks.map((artwork, id) => {
          media.push(
            <img
              index={videoLength + id}
              key={artwork.id}
              className={styles.video}
              src={"https:" + artwork.url.replace("t_thumb", "t_1080p")}
            />
          );
        });
      }
    } else {
      // If used in front page
      this.props.games.forEach((game, id) => {
        media.push(
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

    this.state = { media: media, mediaItem: media[0] };
  }

  componentDidMount() {}

  onNextVideo = () => {
    const newIndex = this.state.mediaItem.props.index + 1;
    this.setState({ mediaItem: this.state.media[newIndex] });
  };

  onPrevVideo = () => {
    const newIndex = this.state.mediaItem.props.index - 1;
    this.setState({ mediaItem: this.state.media[newIndex] });
  };

  renderContent = () => {
    const { media, mediaItem } = this.state;

    return (
      <div className={styles.videosContainer}>
        <div className={styles.buttons}>
          {mediaItem.props.index === 0 ? (
            <div />
          ) : (
            <button onClick={this.onPrevVideo} className={styles.prevButton}>
              <i className="fa fa-chevron-left"></i>
            </button>
          )}
          {mediaItem.props.index === media.length - 1 ? (
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
            transform: `translateX(-${mediaItem.props.index * 100}%)`,
          }}
        >
          {media}
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default VideosContainer;
