import React, { memo } from 'react';
import styles from './index.module.scss';

const Header = () => (
  <div className={styles.header}>
    Header
  </div>
);

export default memo(Header);
