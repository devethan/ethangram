import React from "react";
import LoginForm from "./presenter";

class Container extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        usernameValue={username}
        passwordValue={password}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }
 
  _handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  };
}

export default Container;
