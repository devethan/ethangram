import React from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends React.Component {
  state = {
    loading: true
  };
  static propTypes = {
    getFeeds: PropTypes.func.isRequired,
    feed: PropTypes.object
  };
  render() {
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }
  componentDidMount() {
    const { getFeeds } = this.props;
    if (!this.props.feed) {
      getFeeds();
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
