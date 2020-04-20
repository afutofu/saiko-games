import React from "react";

import styles from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  return (
    <div className={styles.sectionTitle}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.borderBottom} />
    </div>
  );
};

export default SectionTitle;
