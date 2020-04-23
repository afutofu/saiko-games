import React from "react";

import Navbar from "./container/Navbar/Navbar";
import MainContent from "./container/MainContent/MainContent";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
