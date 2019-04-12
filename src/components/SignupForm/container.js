import React from "react";
import SignupForm from "./presenter";
import PropTypes from 'prop-types';

class Container extends React.Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: ""
  };

  static propTypes = {
    generalResistration: PropTypes.func.isRequired
  }

  render() {
    const { email, fullname, username, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        fullnameValue={fullname}
        usernameValue={username}
        passwordValue={password}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }

  _handleChange = ({ target: { name, value } }) => {
      this.setState({
          [name] : value
      });
  };

  _handleSubmit = e => {
      e.preventDefault();
      const { generalResistration } = this.props;
      // temp
      const data = {
        username: this.state.username,
        email: this.state.email,
        password1: this.state.password,
        password2: this.state.password,
      }
      generalResistration(data);
  }

  _handleFacebookLogin = response => {
    console.log(response);
  }
}

export default Container;
