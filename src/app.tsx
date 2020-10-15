import React, { FC } from 'react';
import Setter from '@/Setter';
import Header from '@/Header';
import Workbench from '@/Workbench';
import Coder from '@/Coder';
import Components from '@/Components';
import styles from './app.module.scss';

const App: FC = () => (
  <div className={styles.app}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.components}>
      <Components />
    </div>
    <div className={styles.workbench}>
      <Workbench />
    </div>
    <div className={styles.setter}>
      <Setter />
    </div>
    <Coder />
  </div>
);

export default App;
