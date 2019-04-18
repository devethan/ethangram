import React from "react";
import PropTypes from "prop-types";
import Close from "react-ionicons/lib/MdClose";
import Loader from "components/Spinners";
import styles from "./styles.module.scss";

const UserList = (props, context) => {
  console.log(props);
  return (
    <div className={styles.container}>
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span className={styles.closeLikes} onClick={props.closeLikes}>
          <Close fontSize="35px" color="black" />
        </span>
      </header>
      <div className={styles.content}>
        {props.loading ? (
          <div className={styles.loading}>
            <Loader />
          </div>
        ) : (
          <RenderUsers
            list={props.userList}
            handleFollowClick={props.handleFollowClick}
          />
        )}
        {/* {props.loading ? <Loader /> : "UserList shown" && console.log(props.userList)} */}
      </div>
    </div>
  </div>
  );
};

const RenderUsers = props =>
  props.list.map(user => (
    <UserDisplay
      horizontal={true}
      user={user}
      key={user.id}
      handleFollowClick={props.handleFollowClick}
    />
  ));

const UserDisplay = (props, context) => {
  const { user: { id, profile_image, username, name, following }} = props;
  return (
    <div className={styles.userDisplay}>
      <img
        src={profile_image ? profile_image : require("images/noPhoto.jpg")}
      />
      <span className={styles.usernameBox}>
        <span className={styles.username}>{username}</span>
        <span className={styles.name}>{name}</span>
      </span>
      {following && (
        <span
          className={`${styles.followButton} ${styles.unFollowed}`}
          onClick={() => props.handleFollowClick(id, following)}
        >
          {context.t("Following")}
        </span>
      )}
      {!following && (
        <span
          className={`${styles.followButton}`}
          onClick={() => props.handleFollowClick(id, following)}
        >
          {context.t("Follow")}
        </span>
      )}
    </div>
  );
};

RenderUsers.propTypes = {
  list: PropTypes.array
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  closeLikes: PropTypes.func.isRequired,
  userList: PropTypes.array
};

UserDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

UserDisplay.propTypes = {
  handleFollowClick: PropTypes.func.isRequired
};

export default UserList;
