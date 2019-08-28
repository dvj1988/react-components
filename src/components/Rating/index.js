import React from "react";
import styles from "./style.module.css";
import StarOutlineIcon from "@material-ui/icons/StarBorder";
import StarFilledIcon from "@material-ui/icons/Star";
import StarHalfFilledIcon from "@material-ui/icons/StarHalfOutlined";
import clsx from "clsx";

const Rating = ({ total, value, starSize = "medium" }) => {
  const ratings = [];
  for (let i = 1; i <= total; i++) {
    if (i <= value) {
      ratings.push(
        <StarFilledIcon className={clsx(styles[starSize], styles.star)} />
      );
    } else if (i - value === 0.5) {
      ratings.push(
        <StarHalfFilledIcon className={clsx(styles[starSize], styles.star)} />
      );
    } else {
      ratings.push(
        <StarOutlineIcon className={clsx(styles[starSize], styles.star)} />
      );
    }
  }

  return <div className={styles.wrapper}>{ratings}</div>;
};

export default Rating;
