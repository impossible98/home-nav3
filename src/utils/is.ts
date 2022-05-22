export function isArray(val: Array<string>): boolean {
  return Object.prototype.toString.call(val) === '[object Array]';
}
export function isObject(val: object): boolean {
  return Object.prototype.toString.call(val) === '[object Object]';
}
export function isString(val: string): boolean {
  return Object.prototype.toString.call(val) === '[object String]';
}

export const isSSR = (function() {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
  } catch (e) {
    return true;
  }
})();
