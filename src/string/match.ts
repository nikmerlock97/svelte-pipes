import { isString } from './../helpers';

function transform<T>(
  text: string | T | any,
  pattern: string,
  flags?: string
): RegExpMatchArray | null | T {
  if (!isString(text)) {
    return text;
  }

  return text.match(new RegExp(pattern, flags));
}

export const match = (text: any, pattern: string, flags?: string) => {
  return !!flags ? transform(text, pattern, flags) : transform(text, pattern);
};
