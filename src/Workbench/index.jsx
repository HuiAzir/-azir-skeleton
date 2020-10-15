import React, { memo } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const Workbench = ({
  className = '',
}) => {
  const _className = classnames(className, styles.container);
  return (
    <div className={_className}>
      Workbench
    </div>
  );
};

export default memo(Workbench);
