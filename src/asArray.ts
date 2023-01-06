/**
 * Make the Provided Value an Array if its not already one
 * @param value the value to force as an Array
 * @returns the value as an Array
 */
export const asArray = <T = unknown>(value: T | Array<T>) => {
    if (typeof value === "string") {
        return value.split(",").map((v) => v.trim());
    } else if (value instanceof Array) {
        return value;
    } else {
        return [value];
    }
};
