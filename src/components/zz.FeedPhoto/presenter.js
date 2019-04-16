import React from "react";
import PropTypes from "prop-types";
import IosPawOutline from "react-ionicons/lib/IosPawOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import IosShareOutline from "react-ionicons/lib/IosShareOutline";
import styles from "./styles.module.scss";

const FeedPhoto = (props, context) => {
  const {
    post: {
      id,
      user: { profile_picture, username },
      images: {
        standard_resolution: { width, height, url }
      },
      likes: {count}
    }
  } = props;

  console.log(props);
  if (props.post.caption === null) {
    return (
      <div className={styles.feedPhoto} id={id}>
        No Caption
      </div>
    );
  } else {
    return (
      <div className={styles.feedPhoto} id={id}>
        <div className={styles.titleSection}>
          <div className={styles.column}>
            <img src={profile_picture} />
          </div>
          <div className={styles.column}>{username}</div>
          <div className={styles.column} />
        </div>
        <div className={styles.thumbnail}>
          <img src={url} />
        </div>
        <div className={styles.buttonSection}>
          <div className={styles.column}>
            <IosPawOutline className={styles.button} />
          </div>
          <div className={styles.column}>
            <IosTextOutline className={styles.button} />
          </div>
          <div className={styles.column}>
            <IosShareOutline className={styles.button} />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.statusbar}>
          {count === 1 ? context.t(`${count} like`) : context.t(`${count} likes`)}
          </div>
          <div className={styles.textContent}>
            <span className={styles.id}>
              {username}
            </span>
            <span className={styles.content}>
              {props.post.caption.text}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

FeedPhoto.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    profile_picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired,
  images: PropTypes.shape({
    standard_resolution: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  caption: PropTypes.shape({
    text: PropTypes.string.isRequired,
    created_time: PropTypes.string.isRequired
  })
};

FeedPhoto.contextTypes = {
  t: PropTypes.func.isRequired
};

export default FeedPhoto;
