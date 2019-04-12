import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons/lib/LogoFacebook";
import formStyles from "shared/formStyles.module.scss";

const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        autoComplete="off"
        name="username"
        value={props.usernameValue}
        onChange={props.handleChange}
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        autoComplete="off"
        name="password"
        value={props.passwordValue}
        onChange={props.handleChange}
      />
      <input
        type="submit"
        value={context.t("Log in")}
        className={formStyles.button}
      />
    </form>
    <span className={formStyles.divider}>{context.t("or")}</span>
    <span className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      {context.t("Log in with Facebook")}
    </span>
    <span className={formStyles.forgotLink}>{context.t("Forgot password?")}</span>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;