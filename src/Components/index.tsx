import React, { memo, FC } from 'react';
import { transformExports } from '../../utils/tools';
import * as components from './components';

const Comp: FC = () => {
  const transformExportsComponents = transformExports(components);
  console.log(transformExportsComponents);

  return <div>Components</div>;
};

export default memo(Comp);
