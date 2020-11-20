import React, { FC, memo } from 'react';
import { Row, Col } from 'antd';
import { RowProps } from 'antd/lib/row';
import { ColProps } from 'antd/lib/col';

export interface AzirGrid {
  rowProps?: RowProps & { wrap?: boolean };
  cols: number;
}
const AzirRow: FC<RowProps> = memo(({ align, gutter, justify, children }) => {
  return (
    <Row align={align} gutter={gutter} justify={justify}>
      {children}
    </Row>
  );
});
AzirRow.defaultProps = {
  align: 'top',
  gutter: 0,
  justify: 'start',
};
const AzirCol: FC<ColProps> = memo(
  ({ flex, offset, order, pull, push, span, xs, sm, md, lg, xl, xxl, children }) => {
    return (
      <Col
        flex={flex}
        offset={offset}
        order={order}
        pull={pull}
        push={push}
        span={span}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        xxl={xxl}
      >
        {children}
      </Col>
    );
  },
);
AzirCol.defaultProps = {
  flex: undefined,
  offset: 0,
  order: 0,
  pull: 0,
  push: 0,
  span: 0,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
};

const Component: FC<AzirGrid> = memo(({ cols = 4 }) => {
  const colCountArray = new Array(cols);
  return (
    <Row>
      {colCountArray.map(() => {
        return <Col />;
      })}
    </Row>
  );
});

Component.defaultProps = {};

const prototype = {
  component: Component,
  componentName: 'Grid',
  showName: '栅格',
  category: '布局',
  props: [],
};

export default prototype;
