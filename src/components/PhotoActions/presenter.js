import React from "react";
import PropTypes from "prop-types";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import styles from "./styles.module.scss";

const PhotoActions = (props, context) => {
  return (
    <div className={styles.photoActions}>
      <div className={styles.icons}>
        <span className={styles.icon}>
          {props.isLiked && <IosHeart fontSize="28px" color="#ED4956" onClick={props.handleLikeClick}/>}
          {!props.isLiked && <IosHeartOutline fontSize="28px" color="black" onClick={props.handleLikeClick}/>}
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
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleLikeClick: PropTypes.func.isRequired
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoActions;
