"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractDeepPropertyByParentMapKey = exports.extractDeepPropertyByMapKey = exports.applyPrecision = exports.isVowel = exports.isNumberFinite = exports.isObject = exports.isBoolean = exports.isString = exports.isNumber = exports.isFunction = exports.isNull = exports.isUndefined = void 0;
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
function isObject(value) {
    return value !== null && typeof value === 'object';
}
exports.isObject = isObject;
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
exports.isNumberFinite = isNumberFinite;
function isVowel(letter) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(letter) !== -1;
}
exports.isVowel = isVowel;
function applyPrecision(num, precision) {
    if (precision <= 0) {
        return Math.round(num);
    }
    var tho = Math.pow(10, precision);
    return Math.round(num * tho) / tho;
}
exports.applyPrecision = applyPrecision;
function extractDeepPropertyByMapKey(obj, map) {
    var keys = map.split('.');
    var head = keys.shift();
    return keys.reduce(function (prop, key) {
        return !isUndefined(prop) && !isNull(prop) && !isUndefined(prop[key])
            ? prop[key]
            : undefined;
    }, obj[head || '']);
}
exports.extractDeepPropertyByMapKey = extractDeepPropertyByMapKey;
function extractDeepPropertyByParentMapKey(obj, map) {
    var keys = map.split('.');
    var tail = keys.pop();
    var props = extractDeepPropertyByMapKey(obj, keys.join('.'));
    return { props: props, tail: tail };
}
exports.extractDeepPropertyByParentMapKey = extractDeepPropertyByParentMapKey;
function helpers() {
    return {
        isUndefined: isUndefined,
        isVowel: isVowel,
        isNull: isNull,
        isFunction: isFunction,
        isNumber: isNumber,
        isNumberFinite: isNumberFinite,
        isString: isString,
        isBoolean: isBoolean,
        isObject: isObject,
        extractDeepPropertyByMapKey: extractDeepPropertyByMapKey,
        extractDeepPropertyByParentMapKey: extractDeepPropertyByParentMapKey,
        applyPrecision: applyPrecision,
    };
}
exports.default = helpers;
