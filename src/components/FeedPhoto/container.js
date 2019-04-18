import React from "react";
import FeedPhoto from "./presenter";

class Container extends React.Component {
  state = {
    seeingLikes: false
  };
  render() {
    return (
      <FeedPhoto
        {...this.props.photo}
        {...this.state}
        openLikes={this._openLikes}
        closeLikes={this._closeLikes}
      />
    );
  }
  _openLikes = () => {
    const {getPhotoLikes} = this.props;
    this.setState({
      seeingLikes: true
    });
    getPhotoLikes()
  };
  _closeLikes = () => {
    this.setState({
      seeingLikes: false
    });
  };
}

export default Container;
