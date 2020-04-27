import React from "react";
import styles from "./Navbar.module.css";

import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";

const Navbar = (props) => {
  const onLogoClick = () => {
    props.onLogoClick();
  };

  const onSearch = (searchTerm) => {
    props.onSearch(searchTerm);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Logo onLogoClick={onLogoClick} />
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Navbar;
