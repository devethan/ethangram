import React from "react";
import PropTypes from 'prop-types';
import Ionicon from "react-ionicons/lib/LogoFacebook";
import styles from "./styles.module.scss";

export const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input type="text" placeholder={context.t('Username')} className={styles.textInput} autoComplete="none" />
      <input
        type="password"
        placeholder={context.t('Password')}
        className={styles.textInput}
      />
      <input type="submit" value={context.t('Log in')} className={styles.button} />
    </form>
    <span className={styles.divider}>{context.t('or')}</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> 
      {context.t('Log in with Facebook')}
    </span>
    <span className={styles.forgotLink}>{context.t('Forgot password?')}</span>
  </div>
);

export const SignupForm = (props, context) => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in with
      Facebook
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="email" placeholder="Email" className={styles.textInput} autoComplete="none" />
      <input type="text" placeholder="Full Name" className={styles.textInput} autoComplete="none" />
      <input
        type="username"
        placeholder="Username"
        className={styles.textInput}
        autoComplete="none"
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.textInput}
        autoComplete="none"
      />
      <input type="submit" value="Sign up" className={styles.button} />
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our<span>Terms , Data Policy and Cookies Policy .</span>
    </p>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
}