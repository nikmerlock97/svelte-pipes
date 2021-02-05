"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = tslib_1.__importDefault(require("./array/index"));
var index_2 = tslib_1.__importDefault(require("./currency/index"));
var index_3 = tslib_1.__importDefault(require("./string/index"));
var handleType = {
    // 'date': str
    // obj: obj
    arr: index_1.default,
    cur: index_2.default,
    str: index_3.default,
};
function Pipe(type) {
    if (type === void 0) { type = 'str'; }
    return handleType[type]();
}
exports.default = Pipe;
