import React, { ComponentClass, FC, memo, useEffect, useState } from 'react';
import classnames from 'classnames';
import { useDrop, useDrag } from 'react-dnd';
import { ComponentTypes } from '@/dragTypes';
import styles from './index.module.scss';
import { Prototype, DragObjectWithAzirPrototype, AzirSchema } from '../../types';
import { defaultSchema, mergeSchema } from '../../utils/schema';
// 将workbench上的组件转化为可拖拽组件
const DragComp: FC = ({ children }) => {
  const [, drag] = useDrag({
    item: { type: ComponentTypes.IN_WORKBENCH_COMPONENT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return <div ref={drag}>{children}</div>;
};

// 搭建画布
const Workbench = ({ className = '' }) => {
  const _className = classnames(className, styles.container);

  const [children, setChildren] = useState<Array<Prototype>>([]);
  // schema json
  const [schema, setSchema] = useState<AzirSchema>(defaultSchema);

  // events
  const onDrop = (item: DragObjectWithAzirPrototype) => {
    const mergedSchema = mergeSchema(schema, item.prototype);
    setSchema(mergedSchema);
    setChildren((prev) => {
      const _c = [...prev];
      if (item?.prototype?.component) {
        _c.push(item.prototype);
      }
      return _c;
    });
  };

  const [, drop] = useDrop({
    accept: [ComponentTypes.COMPONENT, ComponentTypes.IN_WORKBENCH_COMPONENT],
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    console.log(schema);
  }, [schema]);

  return (
    <div ref={drop} className={_className}>
      {children.map((c) => {
        if (c?.component) {
          const Comp = c.component as FC | ComponentClass;
          return (
            <DragComp>
              <Comp />
            </DragComp>
          );
        }
        return null;
      })}
    </div>
  );
};

export default memo(Workbench);
