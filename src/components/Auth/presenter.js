import React from "react";
import styles from "./styles.module.scss";
import { LoginForm, SignupForm } from "components/AuthForms";

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
                <>
                  <p>Don't have account?</p>
                  <span
                    className={styles.changeLink}
                    onClick={() => props.changeAction()}
                  >
                    Log in
                  </span>
                </>
              );

            default:
              return (
                <>
                  <p>Have an account?</p>
                  <span
                    className={styles.changeLink}
                    onClick={() => props.changeAction()}
                  >
                    Sign in
                  </span>
                </>
              );
          }
        })()}
      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
        <div className={styles.appStore}>
          <img src={require("images/appStore.png")} alt="App Store" />
          <img src={require("images/googlePlay.png")} alt="Google Play" />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;
