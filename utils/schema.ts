import { cloneDeep } from 'lodash';
import { AzirSchema, Prototype } from '../types';

export const defaultSchema: AzirSchema = {
  componentName: 'PageRoot',
  children: [],
};

export function mergeSchema(prevSchema: AzirSchema, prototype: Prototype): AzirSchema {
  const _schema = cloneDeep(prevSchema);
  _schema.children.push(prototype);
  return _schema;
}
