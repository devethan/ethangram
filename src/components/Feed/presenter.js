import React from 'react';
import PropsType from 'prop-types';
import styles from './styles.module.scss';

const Feed = (props, context) => "Feed Component";

Feed.PropsTypes = {
    loading: PropsType.bool.isRequired,
}
Feed.ContextTypes = {
    t: PropsType.func.isRequired,
}

export default Feed;
