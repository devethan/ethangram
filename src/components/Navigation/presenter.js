import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IosCompassOutline from "react-ionicons/lib/IosCompassOutline";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
// import MdSearch from "react-ionicons/lib/MdSearch";
import styles from "./styles.module.scss";

const Navigation = (props, context) => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <Link to="/">
            <img src={require("images/logo.png")} alt={context.t("Logo")} />
          </Link>
        </div>
        <div className={styles.column}>
          <form method="post">
            <input type="text" placeholder={context.t("Search")} />
          </form>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>
            <Link to="explore">
              <IosCompassOutline fontSize="28px" color="black" />
            </Link>
          </div>
          <div className={styles.item}>
            <IosHeartOutline fontSize="28px" color="black" />
          </div>
          <div className={styles.item}>
            <IosPersonOutline fontSize="28px" color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;
