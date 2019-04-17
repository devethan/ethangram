import React from "react";
import CommentBox from "./presenter";

class Container extends React.Component {
  state = {
    comment: ""
  };
  static propTypes = {

  }
  render() {
    return (
      <CommentBox
        {...this.state}
        handleInputChange={this._handleInputChange}
        handleKeyPress={this._handleKeyPress}
      />
    );
  }
  _handleInputChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      comment: value
    });
  };
  _handleKeyPress = e => {
    const { key } = e;
    const {submitComment} = this.props;
    const {comment} = this.state;
    if( key === 'Enter' ) {
      e.preventDefault();
      submitComment(comment);
      this.setState({
        comment: ''
      })
    }
  };
}

export default Container;
