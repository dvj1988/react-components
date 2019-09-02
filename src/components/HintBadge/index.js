import React from "react";
import styles from "./style.module.css";

const HintBadge = ({ onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      ?
    </div>
  );
};

export default HintBadge;
