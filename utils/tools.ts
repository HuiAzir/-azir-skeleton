export interface IESModule {
  [key: string]: unknown;
}

export type categoryArray = Array<{
  category?: string;
  [key: string]: unknown;
}>;

export const transformExports = (module: IESModule): Array<unknown> => {
  const tmp: unknown[] = [];
  Object.keys(module).forEach((item) => {
    tmp.push(module[item]);
  });
  return tmp;
};

export const classifyByCategory = (
  array: categoryArray,
): {
  [key: string]: Array<unknown>;
} => {
  const willReturn: { [key: string]: Array<unknown> } = {};
  array.forEach((item) => {
    if (item.category) {
      if (Array.isArray(willReturn[item.category])) {
        willReturn[item.category].push(item);
      } else {
        willReturn[item.category] = [];
        willReturn[item.category].push(item);
      }
    } else if (Array.isArray(willReturn.other)) {
      willReturn.other.push(item);
    } else {
      willReturn.other = [];
      willReturn.other.push(item);
    }
  });
  return willReturn;
};
