import React from "react";
import PropsType from "prop-types";
import styles from "./styles.module.scss";
import Spinner from "components/Spinners";

const Feed = (props, context) => {
  if (props.loading) {
    return <LoadingFeed />;
  } else {
    return <RenderFeed {...props} />;
  }
};

Feed.PropsTypes = {
  loading: PropsType.bool.isRequired
};
Feed.ContextTypes = {
  t: PropsType.func.isRequired
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Spinner />
  </div>
);
const RenderFeed = props => {
    return <div className={styles.feed}>{props.feed.data.map(post => console.log(post))}</div>
};

export default Feed;
