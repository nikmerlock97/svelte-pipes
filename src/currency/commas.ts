export const commas = (num: number, currency?: string, cents?: number) => {
  const numString = num.toString() || '';
  const numCharacters = numString.split('');
  const withCommas = numCharacters.reduce((prev, cur, i) => {
    if (i === 0) {
      return prev + cur;
    } else {
      return i % 3 === numString.length % 3 ? prev + ',' + cur : prev + cur;
    }
  }, '');
  return withCommas;
};
