import React, { Fragment } from "react";
import styles from "./style.module.css";
import Paper from "../Paper";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import clsx from "clsx";

const Dialog = ({
  disableBackdropClick = false,
  onClose,
  children,
  show = false,
  className = "",
  style = {}
}) => {
  const $body = document.querySelector("body");
  $body.style.overflow = show ? "hidden" : "scroll";

  const handleClose = () => {
    $body.style.overflow = "scroll";
    onClose();
  };

  return (
    <Fragment>
      {show && (
        <div
          className={clsx(styles.backdrop)}
          onClick={disableBackdropClick ? null : handleClose}
        >
          <Paper
            className={clsx(styles.wrapper, className, { [styles.show]: show })}
            style={style}
            onClick={event => {
              event.stopPropagation();
            }}
          >
            <CloseIcon
              className={styles.closeButton}
              alt="close modal"
              onClick={handleClose}
            />
            {children}
          </Paper>
        </div>
      )}
    </Fragment>
  );
};

export default Dialog;
