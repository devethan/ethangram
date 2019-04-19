import React from "react";
import PropsType from "prop-types";
import styles from "./styles.module.scss";
import UserDisplay from "components/UserDisplay";
import Loading from "components/Spinners";

const Explore = (props, context) => {
  if (props.loading) {
    return <LoadingExplore />;
  } else {
    return <RenderExplore {...props} />;
  }
};

const LoadingExplore = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);
const RenderExplore = props => {
  return (
    <div className={styles.feed}>
      {props.userList.map(user => (
        <UserDisplay big={true} horizontal={true} user={user} key={user.id} />
      ))}
    </div>
  );
};

Explore.PropsTypes = {
  loading: PropsType.bool.isRequired,
  userList: PropsType.array
};

export default Explore;
