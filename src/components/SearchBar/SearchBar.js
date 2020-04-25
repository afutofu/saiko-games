import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input className={styles.searchInput} />
      <button className={styles.button}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
