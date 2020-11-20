import React, { FC } from 'react';
import Setter from '@/Setter';
import Header from '@/Header';
import Workbench from '@/Workbench';
import Coder from '@/Coder';
import Components from '@/Components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './app.module.scss';

const App: FC = () => (
  <div className={styles.app}>
    <div className={styles.header}>
      <Header />
    </div>
    <DndProvider backend={HTML5Backend}>
      <div className={styles.components}>
        <Components />
      </div>
      <div className={styles.workbench}>
        <Workbench />
      </div>
    </DndProvider>
    <div className={styles.setter}>
      <Setter />
    </div>
    <Coder />
  </div>
);

export default App;
