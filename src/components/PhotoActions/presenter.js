import React from "react";
import PropTypes from "prop-types";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import styles from "./styles.module.scss";

const PhotoActions = (props, context) => {
  return (
    <div className={styles.photoActions}>
      <div className={styles.icons}>
        <span className={styles.icon}>
          <IosHeartOutline fontSize="28px" color="black" />
        </span>
        <span className={styles.icon}>
          <IosTextOutline fontSize="28px" color="black" />
        </span>
      </div>
      <span className={styles.likes}>
        {props.number}{" "}
        {props.number === 1 ? context.t("like") : context.t("likes")}
      </span>
    </div>
  );
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoActions;
