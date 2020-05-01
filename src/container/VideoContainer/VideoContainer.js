import React, { Component } from "react";

import styles from "./VideoContainer.module.css";

class VideosContainer extends Component {
  constructor(props) {
    super(props);

    let media = [];

    if (this.props.gamePage) {
      // If video container is used in game page
      const { gameInfo } = this.props;

      for (let i = 0; i < gameInfo.videos.length; i++) {
        const video = gameInfo.videos[i];
        media.push(
          <iframe
            index={i}
            title={video.name}
            key={video.id}
            className={styles.video}
            src={`https://www.youtube.com/embed/${video.video_id}`}
          ></iframe>
        );
      }

      let mediaLength = media.length;

      for (
        let i = mediaLength;
        i - mediaLength < gameInfo.screenshots.length;
        i++
      ) {
        const screenshot = gameInfo.screenshots[i - mediaLength];
        media.push(
          <img
            index={i}
            key={screenshot.id}
            className={styles.video}
            alt="Screenshot failed to load"
            src={"https:" + screenshot.url.replace("t_thumb", "t_1080p")}
          />
        );
      }

      mediaLength = media.length;
      if (gameInfo.artworks) {
        for (
          let i = mediaLength;
          i - mediaLength < gameInfo.artworks.length;
          i++
        ) {
          const artwork = gameInfo.artworks[i - mediaLength];
          media.push(
            <img
              index={i}
              key={artwork.id}
              className={styles.video}
              alt="Artwork failed to load"
              src={"https:" + artwork.url.replace("t_thumb", "t_1080p")}
            />
          );
        }
      }
    } else {
      // If used in front page
      this.props.games.forEach((game, id) => {
        media.push(
          <iframe
            index={id}
            title={game.videos.id}
            key={id}
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
