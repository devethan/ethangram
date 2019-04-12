import React from "react";
import SignupForm from "./presenter";

class Container extends React.Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: ""
  };

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
      console.log(this.state)
  }

  _handleFacebookLogin = response => {
    console.log(response);
  }
}

export default Container;
