import React from "react";
import styles from "./Navbar.module.css";

import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Logo />
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
