import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input className={styles.searchInput} />
      <button className={styles.button}>
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
