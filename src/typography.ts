/**
 * Capitalizes the provided string
 * @param value The value to be Capitalized
 * @returns the value capitalized
 */
export const capitalize = (value: string) => {
    const type = typeof value;
    if (type !== "string") {
        throw new Error(`Expected a string to be passed into capitalize. Got ${type}`);
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * camelCase the provided string
 * @param value The value to be camelCased
 * @returns the value camelCased
 */
export const camelCase = (value: string) => {
    const type = typeof value;
    if (type !== "string") {
        throw new Error(`Expected a string to be passed into camelCase. Got ${type}`);
    }

    const split = value.split(new RegExp("[\\s_-]", "g")).filter((record) => record.length > 0);

    return split
        .map((record, index) => {
            if (index === 0) {
                return record.charAt(0).toLowerCase() + record.slice(1);
            } else {
                return capitalize(record);
            }
        })
        .join("");
};

/**
 * pascalCase the provided string
 * @param value The value to be PascalCased
 * @returns the value PascalCased
 */
export const pascalCase = (value: string) => {
    const type = typeof value;
    if (type !== "string") {
        throw new Error(`Expected a string to be passed into pascalCase. Got ${type}`);
    }

    const split = value.split(new RegExp("[\\s_-]", "g")).filter((record) => record.length > 0);

    return split.map((record) => capitalize(record)).join("");
};

/**
 * Upper Case the provided string
 * @param value The value to be Upper Cased
 * @returns the value Upper Cased
 */
export const uppercase = (value: string) => {
    const type = typeof value;
    if (type !== "string") {
        throw new Error(`Expected a string to be passed into uppercase. Got ${type}`);
    }

    return value.toUpperCase();
};

/**
 * Lower Case the provided string
 * @param value The value to be Lower Cased
 * @returns the value Lower Cased
 */
export const lowercase = (value: string) => {
    const type = typeof value;
    if (type !== "string") {
        throw new Error(`Expected a string to be passed into lowercase. Got ${type}`);
    }

    return value.toLowerCase();
};

/**
 * returns is the `values` starts with the provided `condition`
 *
 * @param value The Value to Check Against
 * @param condition The Value to Check For
 * @param flags Any Flags to be passed to RegExp
 * @returns If the `value` starts with the `condition`
 */
export const startsWith = (value: string, condition: string, flags = "i"): boolean => {
    return new RegExp(`^${String(condition)}`, flags).test(String(value));
};

/**
 * returns is the `values` ends with the provided `condition`
 *
 * @param value The Value to Check Against
 * @param condition The Value to Check For
 * @param flags Any Flags to be passed to RegExp
 * @returns If the `value` ends with the `condition`
 */
export const endsWith = (value: string, condition: string, flags = "i"): boolean => {
    return new RegExp(`${String(condition)}$`, flags).test(String(value));
};

/**
 * returns is the `values` contains the provided `condition`
 *
 * @param value The Value to Check Against
 * @param condition The Value to Check For
 * @param flags Any Flags to be passed to RegExp
 * @returns If the `value` contains the `condition`
 */
export const contains = (value: string, condition: string, flags = "i"): boolean => {
    return new RegExp(`${String(condition)}`, flags).test(String(value));
};
