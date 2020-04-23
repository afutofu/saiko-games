import React from "react";

import logo from "../../assets/logo/logo.png";

import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="Logo" />;
};

export default Logo;
