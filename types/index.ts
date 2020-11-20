import { ReactNode } from 'react';
import { DragObjectWithType } from 'react-dnd';

// 组件原型
export interface Prototype {
  component?: ReactNode;
  componentName?: string;
  showName?: string;
  category?: string;
  children?: Array<Prototype>;
  props?: Array<{
    [key: string]: unknown;
  }>;
}

export interface DragObjectWithAzirPrototype extends DragObjectWithType {
  prototype: Prototype;
}

// schema
export interface AzirSchema {
  componentName: 'PageRoot';
  children: Array<Prototype>;
}
