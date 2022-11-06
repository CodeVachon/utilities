/**
 * Check if the provided value is `Null` or `Undefined`
 * @param value the value to check
 * @returns if the value is Null or Undefined
 */
export const isNil = (value: unknown): value is undefined | null => {
    if (typeof value === "undefined") {
        return true;
    }
    if (value === undefined) {
        return true;
    }
    if (value === null) {
        return true;
    }
    return false;
};
