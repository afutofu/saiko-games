import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import FrontPage from "../FrontPage/FrontPage";
import GamePage from "../GamePage/GamePage";
import GameSearchPage from "../GameSearchPage/GameSearchPage";

class MainContent extends Component {
  state = { pageId: 0, gameId: null, searchTerm: "", background: null };

  componentDidMount() {}

  onLogoClick = () => {
    window.scrollTo(0, 0);
    this.setState({ pageId: 0, gameId: null });
  };

  onGameClick = (gameId) => {
    window.scrollTo(0, 0);
    this.setState({ pageId: 1, gameId: gameId });
  };

  onSearch = (gameName) => {
    window.scrollTo(0, 0);
    this.setState({
      pageId: 2,
      searchTerm: gameName,
    });
  };

  setBackground = (bg) => {
    console.log(bg);
    this.setState({ background: bg });
  };

  renderContent = () => {
    switch (this.state.pageId) {
      case 0:
        return (
          <FrontPage
            onGameClick={this.onGameClick}
            setBackground={this.setBackground}
          />
        );
      case 1:
        return (
          <GamePage onGameClick={this.onGameClick} gameId={this.state.gameId} />
        );
      case 2:
        return (
          <GameSearchPage
            onGameClick={this.onGameClick}
            searchTerm={this.state.searchTerm}
            background={this.state.background}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar onLogoClick={this.onLogoClick} onSearch={this.onSearch} />
        {this.renderContent()}
      </React.Fragment>
    );
  }
}

export default MainContent;
