"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
function transform(str, n, separator) {
    return str
        ? n === 0
            ? str
            : str + separator + transform(str, n - 1, separator)
        : str;
}
exports.transform = transform;
function repeat(str, n, separator) {
    if (n === void 0) { n = 1; }
    if (separator === void 0) { separator = ''; }
    if (n <= 0) {
        throw new RangeError();
    }
    return n === 1 ? str : transform(str, n - 1, separator);
}
exports.default = repeat;
