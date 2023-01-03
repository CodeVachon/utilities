/**
 * A Utility to quickly check for the existence of a key on an object
 * @param obj The Object to check for the provided Key on
 * @param key The Key to check for on the provided Object
 * @returns if the key exists on the object
 */
export const doesKeyExists = <T>(obj: T, key: PropertyKey): key is keyof T =>
    Object.prototype.hasOwnProperty.call(obj, key);
