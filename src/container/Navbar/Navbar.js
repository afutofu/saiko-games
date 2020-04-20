import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.searchBar}>SearchBar</div>
      </div>
    </div>
  );
};

export default Navbar;
