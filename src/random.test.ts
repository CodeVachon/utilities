import { randomInt, randomizeArray, randomValueFromArray } from "./random";
import { rangeAlpha } from "./range";

describe("random", () => {
    describe("randomInt", () => {
        test("returns a random integer within range", () => {
            const min = 1;
            const max = 10;
            for (let i = 0; i < 250; i++) {
                const value = randomInt(min, max);
                expect(value).toBeInteger();
                expect(value).toBeGreaterThanOrEqual(min);
                expect(value).toBeLessThan(max);
            }
        });

        test("returns a random integer within inclusive range", () => {
            const min = 1;
            const max = 10;
            for (let i = 0; i < 250; i++) {
                const value = randomInt(min, max, { inclusive: true });
                expect(value).toBeInteger();
                expect(value).toBeGreaterThanOrEqual(min);
                expect(value).toBeLessThanOrEqual(max);
            }
        });

        test("throws an error if Min is larger than Max", () => {
            const min = 10;
            const max = 1;

            expect(() => {
                randomInt(min, max);
            }).toThrowError("Min value is grater than or equal to Max value");
        });

        test("throws an error if Min is equal to Max", () => {
            const min = 10;
            const max = 10;

            expect(() => {
                randomInt(min, max);
            }).toThrowError("Min value is grater than or equal to Max value");
        });

        test("throws an error if Min is not number", () => {
            const min = "10";
            const max = 10;

            expect(() => {
                // @ts-ignore - explicitly check type error
                randomInt(min, max);
            }).toThrowError("Expected min to be a number");
        });

        test("throws an error if Max is not number", () => {
            const min = 10;
            const max = "10";

            expect(() => {
                // @ts-ignore - explicitly check type error
                randomInt(min, max);
            }).toThrowError("Expected max to be a number");
        });
    });

    describe("randomValueFromArray", () => {
        test("returns a random value from the Array", () => {
            const seed = rangeAlpha("a", "z");
            for (let i = 0; i < 250; i++) {
                const value = randomValueFromArray(seed);
                expect(value).not.toBeArray();
                expect(seed).toInclude(value);
            }
        });

        test("throws an error if seed does not have a length", () => {
            expect(() => {
                randomValueFromArray([]);
            }).toThrowError("Seed Array must have a length greater than 0");
        });

        test("throws an error if seed is not an Array", () => {
            expect(() => {
                // @ts-ignore - explicitly check type error
                randomValueFromArray("a");
            }).toThrowError("Expected seed to be an Array");
        });

        test("returns a random value from the Array excluding selected values", () => {
            const seed = rangeAlpha("a", "z");
            const exclude = rangeAlpha("h", "s");
            for (let i = 0; i < 250; i++) {
                const value = randomValueFromArray(seed, exclude);
                expect(value).not.toBeArray();
                expect(seed).toInclude(value);
                expect(exclude).not.toInclude(value);
            }
        });

        test("returns a random value from the Array excluding selected value", () => {
            const seed = rangeAlpha("a", "z");
            const exclude = "a";
            for (let i = 0; i < 250; i++) {
                const value = randomValueFromArray(seed, exclude);
                expect(value).not.toBeArray();
                expect(seed).toInclude(value);
                expect(value).not.toEqual(exclude);
            }
        });

        test("throws an error if exclude removes all seed items", () => {
            expect(() => {
                const seed = rangeAlpha("a", "z");
                randomValueFromArray(seed, seed);
            }).toThrowError("Filtered Seed Array must have a length greater than 0");
        });
    });

    describe("randomizeArray", () => {
        test("returns an array in random order", () => {
            const seed = rangeAlpha("a", "z");
            const value = randomizeArray(seed);

            expect(value).toBeArrayOfSize(seed.length);
            expect(value.some((v, i) => seed[i] !== v)).toBeTrue();
        });

        test("throws an error if seed is not an Array", () => {
            expect(() => {
                // @ts-ignore - explicitly check type error
                randomValueFromArray("a");
            }).toThrowError("Expected seed to be an Array");
        });
    });
});
