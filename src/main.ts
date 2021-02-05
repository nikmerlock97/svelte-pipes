import * as arr from './array/index';
import * as cur from './currency/index';
import * as str from './string/index';
import * as helpers from './helpers';

export const handleType = {
  // 'date': date,
  // obj: obj,
  arr: arr,
  bool: helpers,
  cur: cur,
  str: str,
};

export type types = 'arr' | 'str' | 'cur' | 'bool';

export default function Pipe(type: types = 'str') {
  return handleType[type];
}
