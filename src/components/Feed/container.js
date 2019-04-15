import React from 'react';
import PropTypes from 'prop-types';
import Feed from './presenter';

class Container extends React.Component {
    state = {
        loading: true,
    }
    static propTypes = {
        getFeeds: PropTypes.func.isRequired,
    }
    render() {
        return <Feed {...this.state} />;
    }
    componentDidMount() {
        const { getFeeds } = this.props;
        getFeeds();
    }
}

export default Container;