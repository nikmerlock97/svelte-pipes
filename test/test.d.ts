declare const assert: any;
declare const howLongTillLunch: any;
declare class MockDate {
    private date;
    private hours;
    private minutes;
    private seconds;
    private milliseconds;
    getDate(): number;
    setDate(date: number): void;
    setHours(h: number): void;
    setMinutes(m: number): void;
    setSeconds(s: number): void;
    setMilliseconds(ms: number): void;
    getTime(): number;
    valueOf(): number;
    static now(): number;
}
declare const now: MockDate;
declare function test(hours: number, minutes: number, seconds: number, expected: string): void;
declare let lunchtime: number[];
//# sourceMappingURL=test.d.ts.map