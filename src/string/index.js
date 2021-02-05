"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var match_1 = tslib_1.__importDefault(require("./match"));
var repeat_1 = tslib_1.__importDefault(require("./repeat"));
// const STRING_PIPES = { match, repeat };
function str() {
    return {
        match: match_1.default,
        repeat: repeat_1.default,
    };
}
exports.default = str;
