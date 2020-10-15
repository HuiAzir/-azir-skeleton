import React, { memo } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const Setter = ({
  className = '',
}) => {
  const _className = classnames(className, styles.container);
  return (
    <div className={_className}>
      Setter
    </div>
  );
};

export default memo(Setter);
