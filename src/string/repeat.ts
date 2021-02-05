function transform(str: string, n: number, separator: string): string {
  return str
    ? n === 0
      ? str
      : str + separator + transform(str, n - 1, separator)
    : str;
}

export const repeat = (str: string, n: number = 1, separator: string = '') => {
  if (n <= 0) {
    throw new RangeError();
  }

  return n === 1 ? str : transform(str, n - 1, separator);
};
