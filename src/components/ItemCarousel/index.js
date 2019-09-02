import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import styles from "./style.module.css";
import LeftIcon from "@material-ui/icons/ChevronLeftOutlined";
import RightIcon from "@material-ui/icons/ChevronRightOutlined";
import clsx from "clsx";
const Carousel = ({ imageUrls = [], onClick }) => {
  const [activeItemIndex, changeActiveItem] = useState(0);

  const handleScrollLeft = () => {
    if (activeItemIndex > 0) {
      changeActiveItem(activeItemIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (activeItemIndex + 3 < imageUrls.length) {
      changeActiveItem(activeItemIndex + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <LeftIcon
        className={clsx(styles.controlButton, {
          [styles.controlActive]: activeItemIndex > 0
        })}
        onClick={handleScrollLeft}
      />
      <div className={styles.carouselWrapper}>
        <ItemsCarousel
          numberOfCards={3.5}
          gutter={10}
          showSlither={true}
          firstAndLastGutter={false}
          freeScrolling={false}
          activeItemIndex={activeItemIndex}
          outsideChevron={true}
          requestToChangeActive={changeActiveItem}
        >
          {imageUrls.map((url, index) => (
            <div
              key={index}
              onClick={() => onClick(url, index)}
              className={styles.item}
              style={{
                backgroundImage: `url(${url})`
              }}
            />
          ))}
        </ItemsCarousel>
      </div>
      <RightIcon
        className={clsx(styles.controlButton, {
          [styles.controlActive]: activeItemIndex + 3 < imageUrls.length
        })}
        onClick={handleScrollRight}
      />
    </div>
  );
};

export default Carousel;
