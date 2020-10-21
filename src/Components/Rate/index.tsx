import React, { FC } from 'react';
import { Rate } from 'antd';
import { RateProps } from 'antd/lib/rate';

const Component: FC<RateProps> = () => <Rate />;
const prototype = {
  component: Component,
  componentName: 'Rate',
  showName: '评分',
  category: '数据录入',
  props: [],
};

export default prototype;
