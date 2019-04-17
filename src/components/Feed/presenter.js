import React from "react";
import PropsType from "prop-types";
import styles from "./styles.module.scss";
import FeedPhoto from "components/FeedPhoto";
import Loading from "components/Spinners";

const Feed = (props, context) => {
  if (props.loading) {
    return <LoadingFeed />;
  } else {
    return <RenderFeed {...props} />;
  }
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);
const RenderFeed = props => {
  return (
    <div className={styles.feed}>
      {props.feed.map(photo => (
        <FeedPhoto key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

Feed.PropsTypes = {
  loading: PropsType.bool.isRequired,
  feed: PropsType.array
};

export default Feed;
