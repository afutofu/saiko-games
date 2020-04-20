import React from "react";

import Navbar from "./container/Navbar/Navbar";
import Main from "./container/Main/Main";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
