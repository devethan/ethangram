import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const FeedPhoto = (props, context) => {
  const {
    photo: {
      caption,
      comments,
      natural_time,
      creator: { username },
      id,
      like_count,
      location,
      tag
    }
  } = props;
  const url = require("config/url.json");
  const api = url.api;
  let {
    photo: {
      creator: { profile_image },
      file
    }
  } = props;
  if (profile_image) {
    profile_image = api + profile_image;
  } else {
    profile_image = require("images/noPhoto.jpg");
  }
  file = api + file;

  return (
    <div className={styles.feedPhoto}>
      <header className={styles.header}>
        <img src={profile_image} alt={username} className={styles.image} />
        <div className={styles.headerColumn}>
          <span className={styles.creator}>{username}</span>
          <span className={styles.location}>{location}</span>
        </div>
      </header>
      <img src={file} alt={caption} />
      <div className={styles.meta}>
        <PhotoActions number={like_count} />
        <PhotoComments caption={caption} creator={username} comments={comments} />
        <TimeStamp time={natural_time}/>
        <CommentBox photoId={id}/>
      </div>
    </div>
  );
};

FeedPhoto.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
};

export default FeedPhoto;
