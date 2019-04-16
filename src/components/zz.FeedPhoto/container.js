import React from 'react';
import PropTypes from 'prop-types';
import FeedPhoto from './presenter';

class Container extends React.Component {
    render() {
        return <FeedPhoto {...this.props} />
    }
} 

export default Container;