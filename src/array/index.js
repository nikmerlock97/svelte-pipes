"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var flatten_1 = tslib_1.__importDefault(require("./flatten"));
// const STRING_PIPES = { match, repeat };
function arr() {
    return {
        flatten: flatten_1.default,
    };
}
exports.default = arr;
