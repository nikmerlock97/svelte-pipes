"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
function transform(input, shallow) {
    if (shallow === void 0) { shallow = false; }
    if (!Array.isArray(input)) {
        return input;
    }
    return shallow ? [].concat.apply([], input) : flatten(input);
}
exports.transform = transform;
function flatten(array) {
    return array.reduce(function (arr, elm) {
        if (Array.isArray(elm)) {
            return arr.concat(flatten(elm));
        }
        return arr.concat(elm);
    }, []);
}
exports.default = flatten;
