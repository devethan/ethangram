import React from 'react';
import PropsType from 'prop-types';
import styles from './styles.module.scss';
import Spinner from 'components/Spinners';

const Feed = (props, context) => {
    if(props.loading) {
        return <LoadingFeed />
    } else {
        return <LoadedFeed />
    }
}

Feed.PropsTypes = {
    loading: PropsType.bool.isRequired,
}
Feed.ContextTypes = {
    t: PropsType.func.isRequired,
}

const LoadingFeed = props => (
    <div className={styles.feed}>
        <Spinner />
    </div>
);
const LoadedFeed = props => "Loaded";

export default Feed;
