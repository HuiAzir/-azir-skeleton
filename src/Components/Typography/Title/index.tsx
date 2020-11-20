import React, { FC, memo } from 'react';
import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';

const { Title } = Typography;

const Comp: FC<TitleProps> = memo(
  ({
    code,
    copyable,
    disabled,
    editable,
    ellipsis,
    level,
    mark,
    underline,
    type,
    children,
    ...otherProps
  }) => (
    <Title
      code={code}
      copyable={copyable}
      disabled={disabled}
      editable={editable}
      ellipsis={ellipsis}
      level={level}
      mark={mark}
      underline={underline}
      type={type}
      {...otherProps}
    >
      {children}
    </Title>
  ),
);
Comp.defaultProps = {
  code: false,
  copyable: false,
  delete: false,
  disabled: false,
  editable: false,
  ellipsis: false,
  mark: false,
  keyboard: false,
  underline: false,
  children: `Introduction`,
};

export default Comp;
