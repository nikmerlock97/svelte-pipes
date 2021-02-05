function transform<T>(input: any[] | T, shallow = false): any[] | T {
  if (!Array.isArray(input)) {
    return input;
  }

  return shallow ? [].concat.apply([], input) : flatten(input);
}

export const flatten = (array: any[]): any[] => {
  return array.reduce((arr: any[], elm: any) => {
    if (Array.isArray(elm)) {
      return arr.concat(flatten(elm));
    }

    return arr.concat(elm);
  }, []);
};
