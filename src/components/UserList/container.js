import React from "react";
import UserList from "./presenter";

class Container extends React.Component {
  state = {
    loading: true
  };
  render() {
    return <UserList {...this.props} {...this.state} />;
  }
  // componentDidMount() {
  //     const { userList } = this.props;
  //     if(userList) {
  //         this.setState({
  //             loading: false
  //         })
  //     }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  }
}

export default Container;
