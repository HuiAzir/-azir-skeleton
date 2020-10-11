import React from 'react';
import Header from './components/Header';
import styles from './app.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    This is App.
  </div>
);

export default App;
