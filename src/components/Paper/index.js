import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";

const Paper = ({ children, className = "", style, onClick }) => (
  <div
    className={clsx(styles.paper, className)}
    style={style}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Paper;
