/**
 * Assert that a Condition is True.
 *
 * **Usage**: `invariant(context?.params?.slug, "Expected Slug to be Defined")`
 *
 * @param condition The thing to check for
 * @param message The Error Message to be Returned
 * @returns Nothing, but Throws an Error if the Condition Fails
 */
function invariant(condition: any, message?: string | (() => string)): asserts condition {
    const prefix = "Invariant Failed";
    if (condition) {
        return;
    } else {
        let errorMessage: Array<string> = [prefix];
        if (message) {
            if (typeof message === "function") {
                errorMessage.push(message());
            } else {
                errorMessage.push(message);
            }
        }
        throw new Error(errorMessage.join(": "));
    }
}

export { invariant };
