import { invariant } from "./invariant";

/**
 * Generate an Array of numbers with a Range from Start to Finish
 *
 * example:
 * ```js
 * const oneThroughFive = range(1, 5);
 * ```
 *
 * @param start the Starting Value in the Array
 * @param stop the End Value in the Array
 * @param step Number to Skip between each Value
 * @returns an Array containing Values from start to stop
 */
export const range = (start: number, stop: number, step = 1) => {
    invariant(typeof start === "number", `Expected start to be a number, Got ${start}`);
    invariant(typeof stop === "number", `Expected stop to be a number, Got ${stop}`);
    invariant(typeof step === "number", `Expected step to be a number, Got ${step}`);

    if (start >= stop) {
        throw new Error(
            `RangeError: start value is grater than or equal to stop value. Got ${JSON.stringify({
                start,
                stop,
                step
            })}`
        );
    }

    if (step <= 0) {
        throw new Error(
            `RangeError: step value is less than or equal to 0. Got ${JSON.stringify({
                start,
                stop,
                step
            })}`
        );
    }

    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
};

/**
 * Generate an Array of Unicode Characters from Start to Finish
 *
 * example:
 * ```js
 * const aThroughZ = rangeAlpha("a", "Z");
 * ```
 *
 * > **Unicode Range**
 * >
 * > `...0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ...`
 *
 * @param start The Starting Unicode Character
 * @param stop The End Unicode Character
 * @param step Number to Skip between each Value
 * @returns an Array of Unicode Characters
 */
export const rangeAlpha = (start: string = "0", stop: string = "Z", step = 1): Array<string> => {
    invariant(typeof start === "string", `Expected start to be a string, Got ${start}`);
    invariant(start.length === 1, `Expected start to be one character, Got ${start}`);
    invariant(typeof stop === "string", `Expected stop to be a string, Got ${stop}`);
    invariant(stop.length === 1, `Expected stop to be one character, Got ${stop}`);

    try {
        return range(start.charCodeAt(0), stop.charCodeAt(0), step).map((v) =>
            String.fromCharCode(v)
        );
    } catch (error) {
        if (
            error instanceof Error &&
            new RegExp(error.message).test("start value is grater than or equal to stop value")
        ) {
            throw new Error(
                `RangeError: start value is grater than or equal to stop value. Got: ${JSON.stringify(
                    {
                        start,
                        stop,
                        step
                    }
                )}. Expected: ...0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ...`
            );
        } else {
            throw error;
        }
    }
};
