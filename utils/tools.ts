interface IESModule {
  [key: string]: unknown;
}

export const transformExports = (module: IESModule): Array<unknown> => {
  const tmp: unknown[] = [];
  Object.keys(module).forEach((item) => {
    tmp.push(module[item]);
  });
  return tmp;
};
