import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons/lib/LogoFacebook";
import formStyles from "shared/formStyles.module.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <button className={formStyles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in with
      Facebook
    </button>
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form}>
      <input
        type="email"
        placeholder="Email"
        className={formStyles.textInput}
        autoComplete="none"
      />
      <input
        type="text"
        placeholder="Full Name"
        className={formStyles.textInput}
        autoComplete="none"
      />
      <input
        type="username"
        placeholder="Username"
        className={formStyles.textInput}
        autoComplete="none"
      />
      <input
        type="password"
        placeholder="Password"
        className={formStyles.textInput}
        autoComplete="none"
      />
      <input type="submit" value="Sign up" className={formStyles.button} />
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our
      <span>Terms , Data Policy and Cookies Policy .</span>
    </p>
  </div>
);

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
