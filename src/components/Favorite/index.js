import React from "react";
import styles from "./style.module.css";
import { FavoriteBorder, Favorite } from "@material-ui/icons";

const FavoriteComponent = ({ isFavorite, toggleFavorite }) => {
  return isFavorite ? (
    <Favorite
      className={styles.favorite}
      onClick={() => toggleFavorite(false)}
    />
  ) : (
    <FavoriteBorder
      className={styles.favoriteOutline}
      onClick={() => toggleFavorite(true)}
    />
  );
};

export default FavoriteComponent;
