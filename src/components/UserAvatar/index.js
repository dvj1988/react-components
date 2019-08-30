import React from "react";
import styles from "./style.module.css";

const sizeMap = {
  small: "36px",
  large: "72px"
};

const getBorderRadius = size => {
  const mappedSize = sizeMap[size] || "36px";
  return `${parseInt(mappedSize, 10) / 2}px`;
};

const UserAvatar = ({ imgUrl, size }) => (
  <div
    className={styles.userAvatar}
    style={{
      backgroundImage: `url('${imgUrl}')`,
      width: sizeMap[size] || "36px",
      height: sizeMap[size] || "36px",
      borderRadius: getBorderRadius(size)
    }}
  />
);

export default UserAvatar;
