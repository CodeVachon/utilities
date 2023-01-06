import { asArray } from "./asArray";
import { invariant } from "./invariant";

export interface IRandomIntOptions {
    /**
     * Include the Maximum Value as a possible value
     */
    inclusive: boolean;
}
/**
 * Generate a Random Integer
 *
 * @param min The Minimum Value to Select From
 * @param max The Maximum Value to Select To
 * @param options Additional Options
 * @returns
 */
export const randomInt = (
    min: number,
    max: number,
    options: Partial<IRandomIntOptions> = { inclusive: false }
): number => {
    invariant(typeof min === "number", `Expected min to be a number, Got ${min}`);
    invariant(typeof max === "number", `Expected max to be a number, Got ${max}`);

    const thisMin = Math.ceil(min);
    const thisMax = Math.floor(max);

    invariant(
        thisMin < thisMax,
        `RangeError: Min value is grater than or equal to Max value. Got ${JSON.stringify({
            min,
            max
        })}`
    );

    return Math.floor(
        Math.random() * (thisMax - thisMin + (options.inclusive === true ? 1 : 0)) + thisMin
    );
};

/**
 * Get a Random Index from the Provided Array
 *
 * @param seed The Array of Values to Randomly Select From
 * @param exclude Values to Exclude from the the Array of Values
 * @returns a Randomly Selected Value from the List
 */
export const randomValueFromArray = <T = unknown>(
    seed: Array<T>,
    exclude: T | Array<T> = []
): T => {
    invariant(Array.isArray(seed), `Expected seed to be an Array, Got ${JSON.stringify(seed)}`);

    const excludedValues = asArray(exclude);
    if (excludedValues.length > 0) {
        const allowedList = seed.filter(
            (seedValue) => !excludedValues.some((excludeValue) => excludeValue === seedValue)
        );

        invariant(
            allowedList.length > 0,
            "RangeError: Filtered Seed Array must have a length greater than 0. perhaps you have excluded all items from the seed"
        );

        if (allowedList.length === 1) {
            return allowedList[0];
        } else {
            return allowedList[randomInt(0, allowedList.length)];
        }
    } else {
        invariant(seed.length > 0, "RangeError: Seed Array must have a length greater than 0.");

        if (seed.length === 1) {
            return seed[0];
        } else {
            return [...seed][randomInt(0, seed.length)];
        }
    }
};

/**
 * Reorder a Provided Array Randomly
 *
 * @param seed The Array to Be Randomized
 * @returns a new copy of the provided Array in a Randomized Order
 */
export const randomizeArray = <T = unknown>(seed: Array<T>): Array<T> => {
    invariant(Array.isArray(seed), `Expected seed to be an Array, Got ${JSON.stringify(seed)}`);
    const localCopy = [...seed];
    const newArray: Array<T> = [];

    while (localCopy.length > 0) {
        newArray.push(localCopy.splice(randomInt(0, localCopy.length), 1)[0]);
    }

    return newArray;
};
