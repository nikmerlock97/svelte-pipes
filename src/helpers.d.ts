export declare function isUndefined(value: any): boolean;
export declare function isNull(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isString(value: any): boolean;
export declare function isBoolean(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isNumberFinite(value: any): boolean;
export declare function isVowel(letter: string): boolean;
export declare function applyPrecision(num: number, precision: number): number;
export declare function extractDeepPropertyByMapKey(obj: any, map: string): any;
export declare function extractDeepPropertyByParentMapKey(obj: any, map: string): any;
export default function helpers(): {
    isUndefined: typeof isUndefined;
    isVowel: typeof isVowel;
    isNull: typeof isNull;
    isFunction: typeof isFunction;
    isNumber: typeof isNumber;
    isNumberFinite: typeof isNumberFinite;
    isString: typeof isString;
    isBoolean: typeof isBoolean;
    isObject: typeof isObject;
    extractDeepPropertyByMapKey: typeof extractDeepPropertyByMapKey;
    extractDeepPropertyByParentMapKey: typeof extractDeepPropertyByParentMapKey;
    applyPrecision: typeof applyPrecision;
};
//# sourceMappingURL=helpers.d.ts.map