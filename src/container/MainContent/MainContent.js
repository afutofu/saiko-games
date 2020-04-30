import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import FrontPage from "../FrontPage/FrontPage";
import GamePage from "../GamePage/GamePage";
import GameSearchPage from "../GameSearchPage/GameSearchPage";

import defaultBackground from "../../assets/images/defaultBackground.jpg";

class MainContent extends Component {
  state = {
    pageId: 2,
    gameId: null,
    searchTerm: "counter strike",
    background: defaultBackground,
    searchPosition: null,
    fromSearch: false,
  };

  onLogoClick = () => {
    window.scrollTo(0, 0);
    this.setState({ pageId: 0, gameId: null, searchTerm: "" });
  };

  onGameClick = (gameId) => {
    window.scrollTo(0, 0);
    this.setState((prevState) => {
      if (prevState.pageId === 2) {
        return { pageId: 1, gameId, fromSearch: true };
      }
      return { pageId: 1, gameId, searchPosition: null, fromSearch: false };
    });
  };

  onSearch = (gameName) => {
    window.scrollTo(0, 0);
    this.setState({
      pageId: 2,
      searchTerm: gameName,
      searchPosition: null,
    });
  };

  onBackToSearch = () => {
    console.log("go back to", 0, this.state.searchPosition);
    this.setState({ pageId: 2 });
  };

  setSearchPosition = (y) => {
    this.setState({ searchPosition: y });
    console.log("search pos:", y);
  };

  setBackground = (bg) => {
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
          <GamePage
            onGameClick={this.onGameClick}
            onBackToSearch={this.onBackToSearch}
            gameId={this.state.gameId}
            fromSearch={this.state.fromSearch}
          />
        );
      case 2:
        return (
          <GameSearchPage
            onGameClick={this.onGameClick}
            searchTerm={this.state.searchTerm}
            searchPosition={this.state.searchPosition}
            setSearchPosition={this.setSearchPosition}
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
