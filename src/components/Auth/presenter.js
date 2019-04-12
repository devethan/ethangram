import React from "react";
import PropTypes from 'prop-types';
import styles from "./styles.module.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="phone" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo" />
        {props.action === 'login' && <LoginForm />}
        {props.action === 'signup' && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {(() => {
          switch (props.action) {
            case "login":
              return (
                <p>
                    {context.t(`Don't have account?`)}
                  <span
                    className={styles.changeLink}
                    onClick={() => props.changeAction()}
                  >
                    {context.t(`Sign in`)}
                  </span>
                </p>
              );

            default:
              return (
                <p>
                  {context.t(`Have an account?`)}
                  <span
                    className={styles.changeLink}
                    onClick={() => props.changeAction()}
                  >
                    {context.t(`Log in`)}
                  </span>
                </p>
              );
          }
        })()}
      </div>
      <div className={styles.appBox}>
        <span>{context.t(`Get the app`)}</span>
        <div className={styles.appStore}>
          <img src={require("images/appStore.png")} alt="App Store" />
          <img src={require("images/googlePlay.png")} alt="Google Play" />
        </div>
      </div>
    </div>
  </main>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Auth;
