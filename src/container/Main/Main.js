import React, { Component } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedGame from "../../components/FeaturedGame/FeaturedGame";

import styles from "./Main.module.css";

class Main extends Component {
  state = {};

  renderContent = () => {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <SectionTitle title="featured" />
          <FeaturedGame
            name="Spiral Knights"
            genres={["RPG", "Adventure"]}
            storyline="You have crashed. You are stranded. But you are not alone. The Spiral 
            Knights have awoken on an alien world. Their equipment stores have been 
            raided and their starship, The Skylark, will not recover from the crash. Now 
            they must work together to survive on a journey that will take them to the 
            very core of the world."
          />
          <SectionTitle title="latest releases" />
          <SectionTitle title="trending" />
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Main;
