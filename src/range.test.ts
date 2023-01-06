import { range, rangeAlpha } from "./range";
import { randomInt } from "./random";

describe("range", () => {
    describe("range", () => {
        test("returns an Array of numbers from 1 to 10", () => {
            const start = 1;
            const stop = 10;
            const value = range(start, stop);

            expect(value).toBeArrayOfSize(stop);
            expect(value[0]).toEqual(start);
            expect(value[value.length - 1]).toEqual(stop);
        });

        test("returns an Array of numbers from 1 to 10 with a step of 2", () => {
            const start = 1;
            const stop = 10;
            const step = 2;
            const value = range(start, stop, step);

            expect(value).toBeArrayOfSize(Math.ceil((stop - start) / step));
            expect(value[0]).toEqual(start);
            expect(value[value.length - 1]).toEqual(stop - 1);
        });

        test("throws an error if start is larger than stop", () => {
            const start = 10;
            const stop = 1;

            expect(() => {
                range(start, stop);
            }).toThrowError("start value is grater than or equal to stop value");
        });

        test("throws an error if start is equal to stop", () => {
            const start = 10;
            const stop = 10;

            expect(() => {
                range(start, stop);
            }).toThrowError("start value is grater than or equal to stop value");
        });

        test("throws an error if start is not number", () => {
            const start = "10";
            const stop = 10;

            expect(() => {
                // @ts-ignore - explicitly check type error
                range(start, stop);
            }).toThrowError("Expected start to be a number");
        });

        test("throws an error if stop is not number", () => {
            const start = 10;
            const stop = "10";

            expect(() => {
                // @ts-ignore - explicitly check type error
                range(start, stop);
            }).toThrowError("Expected stop to be a number");
        });

        test("throws an error if step is not a number", () => {
            const start = 1;
            const stop = 10;

            expect(() => {
                // @ts-ignore - explicitly check type error
                range(start, stop, "a");
            }).toThrowError("Expected step to be a number");
        });

        test("throws an error if step is less or equal to 0", () => {
            const start = 1;
            const stop = 10;

            expect(() => {
                // @ts-ignore - explicitly check type error
                range(start, stop, randomInt(-10, 0));
            }).toThrowError("step value is less than or equal to 0");
        });
    });

    describe("rangeAlpha", () => {
        test("returns an Array containing a-z", () => {
            const start = "a";
            const stop = "z";
            const value = rangeAlpha(start, stop);

            expect(value).toBeArrayOfSize(stop.charCodeAt(0) + 1 - start.charCodeAt(0));
            expect(value[0]).toEqual(start);
            expect(value[value.length - 1]).toEqual(stop);
        });

        test("returns an Array containing A-Z", () => {
            const start = "A";
            const stop = "Z";
            const value = rangeAlpha(start, stop);

            expect(value).toBeArrayOfSize(stop.charCodeAt(0) + 1 - start.charCodeAt(0));
            expect(value[0]).toEqual(start);
            expect(value[value.length - 1]).toEqual(stop);
        });

        test("returns an Array containing 0-9", () => {
            const start = "0";
            const stop = "9";
            const value = rangeAlpha(start, stop);

            expect(value).toBeArrayOfSize(stop.charCodeAt(0) + 1 - start.charCodeAt(0));
            expect(value[0]).toEqual(start);
            expect(value[value.length - 1]).toEqual(stop);
        });

        test("returns an Array containing 0-Z", () => {
            const start = "0";
            const stop = "Z";
            const value = rangeAlpha(start, stop);

            expect(value).toBeArrayOfSize(stop.charCodeAt(0) + 1 - start.charCodeAt(0));
            expect(value[0]).toEqual(start);
            expect(value[value.length - 1]).toEqual(stop);
        });

        test("throws an error if start is not a string", () => {
            const start = 1;
            const stop = "z";

            expect(() => {
                // @ts-ignore - explicitly check type error
                rangeAlpha(start, stop);
            }).toThrowError("Expected start to be a string");
        });

        test("throws an error if stop is not a string", () => {
            const start = "a";
            const stop = 0;

            expect(() => {
                // @ts-ignore - explicitly check type error
                rangeAlpha(start, stop);
            }).toThrowError("Expected stop to be a string");
        });

        test("throws an error if step is not a number", () => {
            const start = "a";
            const stop = "z";

            expect(() => {
                // @ts-ignore - explicitly check type error
                rangeAlpha(start, stop, "a");
            }).toThrowError("Expected step to be a number");
        });

        test("throws an error if step is less or equal to 0", () => {
            const start = "a";
            const stop = "z";

            expect(() => {
                // @ts-ignore - explicitly check type error
                rangeAlpha(start, stop, randomInt(-10, 0));
            }).toThrowError("step value is less than or equal to 0");
        });
    });
});
