import React from "react";
import UserList from "./presenter";

class Container extends React.Component {
  state = {
    loading: true
  };
  render() {
    return <UserList 
              {...this.props} 
              {...this.state} 
              handleFollowClick={this._handleFollowClick} 
            />;
  }
  componentDidMount() {
      const { userList } = this.props;
      if(userList) {
          this.setState({
              loading: false
          })
      }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList) {
      console.log(nextProps.userList)
      this.setState({
        loading: false
      });
    }
  }

  _handleFollowClick = (userId, following) => {
    const { handleFollowClick } = this.props;
    handleFollowClick(userId, following);
  }
}

export default Container;
