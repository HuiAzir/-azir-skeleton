import React, { memo } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const Coder = ({ className = '' }) => {
  const _className = classnames(className, styles.container);
  return <div className={_className}>Coder</div>;
};

export default memo(Coder);
