import React, { FC, memo } from 'react';
import { Typography } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';

const { Paragraph } = Typography;

const Comp: FC<ParagraphProps> = memo(
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
    <Paragraph
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
    </Paragraph>
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
  children: ` In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.`,
};

export default Comp;
