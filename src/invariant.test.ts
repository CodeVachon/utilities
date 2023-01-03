import { invariant } from "./invariant";

describe("invariant", () => {
    test("does not throw an error when the condition is true", () => {
        expect(() => {
            invariant(true);
        }).not.toThrow();
    });

    test("does throw an error when the condition is false", () => {
        expect(() => {
            invariant(false);
        }).toThrow();
    });

    test("throws the expected default error message", () => {
        expect(() => {
            invariant(false);
        }).toThrow(new RegExp("Invariant Failed", "i"));
    });

    test("throws the expected passed error message string", () => {
        const testMessage = "I Am Groot";
        expect(() => {
            invariant(false, testMessage);
        }).toThrow(new RegExp(`Invariant Failed: ${testMessage}`, "i"));
    });

    test("throws the expected passed error message function", () => {
        const testMessage = "I Am Rocket";
        expect(() => {
            invariant(false, () => testMessage);
        }).toThrow(new RegExp(`Invariant Failed: ${testMessage}`, "i"));
    });
});
