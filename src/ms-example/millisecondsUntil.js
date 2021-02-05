"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function millisecondsUntil(date) {
    return date.getTime() - Date.now();
}
exports.default = millisecondsUntil;
