import React from 'react';
export interface IButtonProps {
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: 'submit' | 'reset' | 'button';
    icon?: React.ReactNode;
    loading?: boolean | {
        delay: number;
    };
    onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    shape?: 'circle' | 'round';
    size?: 'large' | 'middle' | 'small';
    target?: string;
    type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
}
declare const prototype: {
    component: React.FC<IButtonProps>;
    props: {
        name: string;
        setter: string;
        defaultValue: string;
    }[];
};
export default prototype;
