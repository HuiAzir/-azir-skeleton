import React, { memo, FC } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className = '' }) => {
  const _className = classnames(className, styles.container);
  return <div className={_className}>Header</div>;
};

export default memo(Header);
