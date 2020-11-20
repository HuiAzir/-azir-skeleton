import React, { FC, memo } from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';

const { Text } = Typography;

const Comp: FC<TextProps> = memo(
  ({
    code,
    copyable,
    disabled,
    editable,
    ellipsis,
    mark,
    keyboard,
    underline,
    strong,
    type,
    children,
    ...otherProps
  }) => (
    <Text
      code={code}
      copyable={copyable}
      disabled={disabled}
      editable={editable}
      ellipsis={ellipsis}
      mark={mark}
      keyboard={keyboard}
      underline={underline}
      strong={strong}
      type={type}
      {...otherProps}
    >
      {children}
    </Text>
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
  strong: false,
  type: undefined,
  children: `uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development`,
};

export default Comp;
