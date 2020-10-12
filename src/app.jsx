import React from 'react';
import Setter from '@components/Setter';
import Header from '@components/Header';
import Workbench from '@components/Workbench';
import Coder from '@components/Coder';
import styles from './app.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Setter />
    <Workbench />
    <Coder />
    This is App.
  </div>
);

export default App;
