import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

class index extends React.Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  }
  render() {
    const { props, context } = this;
    const { t } = context;
    return (
      <footer className={styles.footer}>
        <div className={styles.column}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.listItem}>{t('About us')}</li>
              <li className={styles.listItem}>{t('Support')}</li>
              <li className={styles.listItem}>{t('Press')}</li>
              <li className={styles.listItem}>{t('API')}</li>
              <li className={styles.listItem}>{t('Jobs')}</li>
              <li className={styles.listItem}>{t('Privacy')}</li>
              <li className={styles.listItem}>{t('Terms')}</li>
              <li className={styles.listItem}>{t('Directory')}</li>
              <li className={styles.listItem}>{t('Language')}</li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          <span className={styles.copyright}>© 2019 ethangram</span>
        </div>
      </footer>
    );
  }
};

export default index;
