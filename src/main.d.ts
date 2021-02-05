export declare type types = 'arr' | 'str' | 'cur';
export default function Pipe(type?: types): {
    flatten: typeof import("./array/flatten").default;
} | {
    commas: typeof import("./currency/commas").default;
} | {
    match: typeof import("./string/match").default;
    repeat: typeof import("./string/repeat").default;
};
//# sourceMappingURL=main.d.ts.map