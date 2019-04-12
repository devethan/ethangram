import React from "react";
import LoginForm from "./presenter";
import PropTypes from 'prop-types';

class Container extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    generalLogin: PropTypes.func.isRequired,
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <LoginForm
        usernameValue={username}
        emailValue={email}
        passwordValue={password}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }
 
  _handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { generalLogin } = this.props;
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    generalLogin(data);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
    console.log(response);
  }

}

export default Container;
