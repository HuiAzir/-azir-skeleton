import React, { FC, memo } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

const Component: FC<ButtonProps> = memo(
  ({
    block,
    danger,
    disabled,
    ghost,
    href,
    htmlType,
    icon,
    loading,
    onClick,
    shape,
    size,
    target,
    type,
  }) => (
    <Button
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      href={href}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      onClick={onClick}
      shape={shape}
      size={size}
      target={target}
      type={type}
    >
      按钮
    </Button>
  ),
);
Component.defaultProps = {
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  href: undefined,
  htmlType: 'button',
  icon: undefined,
  loading: false,
  onClick: undefined,
  shape: undefined,
  size: undefined,
  target: undefined,
  type: 'default',
};
const prototype = {
  component: Component,
  componentName: 'Button',
  showName: '按钮',
  category: '通用',
  props: [],
};

export default prototype;
