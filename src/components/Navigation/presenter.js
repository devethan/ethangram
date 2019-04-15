import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Ionicons from 'react-ionicons';
import styles from './styles.module.scss';

const Navigation = (props, context) => {
    return (
        <div className={styles.root}>
            <div className={styles.inner}>
                <div className={styles.column}>
                    <Link to="/">
                        <img 
                            src={require('images/logo.png')} 
                            alt={context.t('Logo')}
                        />
                    </Link>
                </div>
                <div className={styles.column}>
                    <form method="post">
                        <input 
                            type="text" 
                            placeholder={context.t('Search')}
                        />
                    </form>
                </div>
                <div className={styles.column}>
                    <div className={styles.item}>
                        <Link to="explore">explore</Link>
                    </div>
                    <div className={styles.item}>
                        like
                    </div>
                    <div className={styles.item}>
                        private
                    </div>
                </div>
            </div>
        </div>
    );
}

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Navigation;