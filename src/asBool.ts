/**
 * A Utility to consitanctly convert a value to a boolean.
 *
 * Useful for values coming in from ENV, Database, Forms, and JSON fields
 * @param value a value to be converted to a boolean
 * @returns a boolean value
 */
export const asBool = (value: string | number | boolean): boolean => {
    if (typeof value === "boolean") {
        return value;
    } else if (typeof value === "number") {
        return value === 1;
    } else {
        return (
            ["true", "yes", "y", "1", "on"].indexOf(
                String(value || "")
                    .trim()
                    .toLowerCase()
            ) !== -1
        );
    }
};
