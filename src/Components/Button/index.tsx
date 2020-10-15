import React, { FC, memo } from 'react';
import { Button } from 'antd';

export interface IButtonProps {
  block?: boolean // 将按钮宽度调整为其父宽度的选项
  danger?: boolean // 设置危险按钮
  disabled?: boolean // 按钮失效状态
  ghost?: boolean // 幽灵属性，使按钮背景透明false
  href?: string // 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
  htmlType?: 'submit' | 'reset' | 'button' // 设置 button 原生的 type 值，可选值请参考 HTML 标准 button
  icon?: React.ReactNode // 设置按钮的图标组件
  loading?: boolean | { delay: number } // 设置按钮载入状态
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined // 点击按钮时的回调
  shape?: 'circle' | 'round' // 设置按钮形状，可选值为 circle、 round 或者不设
  size?: 'large' | 'middle' | 'small' // 设置按钮大小
  target?: string // 相当于 a 链接的 target 属性，href 存在时生效
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default' // 设置按钮类型={handleOnClick}
}

const Component: FC<IButtonProps> = memo(({
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
));
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
  props: [
    {
      name: '',
      setter: '',
      defaultValue: '',
    },
  ],
};

export default prototype;
