"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./../helpers");
function transform(text, pattern, flags) {
    if (!helpers_1.isString(text)) {
        return text;
    }
    return text.match(new RegExp(pattern, flags));
}
function match(text, pattern, flags) {
    return !!flags ? transform(text, pattern, flags) : transform(text, pattern);
}
exports.default = match;
