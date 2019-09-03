import React, { useState } from "react";
import styles from "./style.module.css";
import StarOutlineIcon from "@material-ui/icons/StarBorder";
import StarFilledIcon from "@material-ui/icons/Star";
import StarHalfFilledIcon from "@material-ui/icons/StarHalfOutlined";
import clsx from "clsx";
import { debounce } from "lodash";

const Rating = ({ total, value, starSize = "medium", onChange }) => {
  const ratings = [];
  const [hoverValue, setHoverValue] = useState(value);

  const setValue = debounce(setHoverValue, 10);

  const handleOnChange = value => {
    onChange({ target: { value } });
  };

  for (let i = 1; i <= total; i++) {
    if (i <= hoverValue) {
      ratings.push(
        <StarFilledIcon
          className={clsx(styles[starSize], styles.star)}
          onClick={() => handleOnChange(i)}
          onMouseOver={() => {
            setValue(i);
          }}
          onMouseLeave={() => {
            setValue(value);
          }}
        />
      );
    } else if (i - value === 0.5) {
      ratings.push(
        <StarHalfFilledIcon className={clsx(styles[starSize], styles.star)} />
      );
    } else {
      ratings.push(
        <StarOutlineIcon
          className={clsx(styles[starSize], styles.star)}
          onClick={() => handleOnChange(i)}
          onMouseOver={() => {
            setValue(i);
          }}
          onMouseLeave={() => {
            setValue(value);
          }}
        />
      );
    }
  }

  return (
    <div className={styles.wrapper} onMouseLeave={() => setValue(value)}>
      {ratings}
    </div>
  );
};

export default Rating;
