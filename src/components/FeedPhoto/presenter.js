import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import UserList from "components/UserList";

const FeedPhoto = (props, context) => {
  const {
    caption,
    comments,
    natural_time,
    creator: { username },
    id,
    like_count,
    location,
    is_liked,
  } = props;
  let {
    creator: { profile_image },
    file
  } = props;
  if (!profile_image) {
    profile_image = require("images/noPhoto.jpg");
  }

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
        <PhotoActions
          number={like_count}
          isLiked={is_liked}
          photoId={id}
          openLikes={props.openLikes}
        />
        <PhotoComments
          caption={caption}
          creator={username}
          comments={comments}
        />
        <TimeStamp time={natural_time} />
        <CommentBox photoId={id} />
      </div>
      {props.seeingLikes && <UserList title={context.t("Likes")} closeLikes={props.closeLikes} />}
    </div>
  );
};

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired,
  seeingLikes: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

FeedPhoto.contextTypes = {
  t: PropTypes.func.isRequired
};

export default FeedPhoto;
