import React, { memo, FC } from 'react';
import { ComponentTypes } from '@/dragTypes';
import { useDrag } from 'react-dnd';
import { Prototype } from '../../types';
import styles from './index.module.scss';
import { transformExports, classifyByCategory, categoryArray } from '../../utils/tools';
import * as components from './components';

const transformExportsComponents = transformExports(components) as categoryArray;
const classifyByCategoryComp = classifyByCategory(transformExportsComponents) as {
  [key: string]: Array<Prototype>;
};

const CompItem: FC<{ prototype: Prototype; tag?: string }> = ({ prototype, tag = 'dd' }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ComponentTypes.COMPONENT, prototype },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return React.createElement(
    tag,
    {
      className: styles.compItemContainer,
      style: {
        opacity: isDragging ? '0.5' : '1',
      },
      ref: drag,
    },
    prototype.showName,
  );
};

const HasCategoryItem: FC<{ prototype: Prototype }> = ({ prototype }) => {
  return (
    <dd>
      {prototype.showName}
      <ul>
        {prototype.children?.map((item) => (
          <CompItem prototype={item} tag="li" />
        ))}
      </ul>
    </dd>
  );
};

const Comp: FC = () => {
  return (
    <div>
      <dl>
        {Object.keys(classifyByCategoryComp).map((key) => {
          return (
            <>
              <dt>{key}</dt>
              {classifyByCategoryComp[key].map((item) => {
                if (item.component) {
                  return <CompItem prototype={item} />;
                }
                if (!item.component && item?.children?.length) {
                  return <HasCategoryItem prototype={item} />;
                }
                return null;
              })}
            </>
          );
        })}
      </dl>
    </div>
  );
};

export default memo(Comp);
