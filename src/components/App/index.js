import React, { Component } from "react";
import Footer from 'components/Footer';
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Footer/>
      </div>
    );
  }
}

export default App;
