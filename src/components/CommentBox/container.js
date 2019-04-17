import React from 'react';
import CommentBox from './presenter';

class Container extends React.Component {
    render() {
        return <CommentBox {...this.props} />;
    }
}

export default Container;