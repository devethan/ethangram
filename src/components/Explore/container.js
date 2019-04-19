import React from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends React.Component {
  state = {
    loading: true
  };
  static propTypes = {
    getExplore: PropTypes.func.isRequired,
    userList: PropTypes.array
  };
  render() {
    const { userList } = this.props;
    return <Explore {...this.state} userList={userList} />;
  }
  componentDidMount() {
    const { getExplore } = this.props;
    if (!this.props.userList) {
      getExplore();
    } else {
      this.setState({
        loading: false
      });
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps) {
      this.setState({
        loading: false
      });
    }
  };
}

export default Container;
