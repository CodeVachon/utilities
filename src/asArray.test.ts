import { asArray } from "./asArray";

describe("asArray", () => {
    test("Returns an Array if an Array is Passed", () => {
        const value = [1, 2, 3];
        expect(asArray(value)).toBeArrayOfSize(value.length);
        expect(asArray(value)).toIncludeAllMembers(value);
    });

    test("Returns an Array of values if a string is Passed", () => {
        const expected = ["a", "b", "c"];
        const value = expected.join(", ");
        expect(asArray(value)).toBeArrayOfSize(expected.length);
        expect(asArray(value)).toIncludeAllMembers(expected);
    });

    test("Returns an Array of values if a string without a , is Passed", () => {
        const value = "a";
        expect(asArray(value)).toBeArrayOfSize(1);
        expect(asArray(value)).toIncludeAllMembers([value]);
    });

    test("Returns an Array of values if a single value is Passed", () => {
        const value = 1;
        expect(asArray(value)).toBeArrayOfSize(1);
        expect(asArray(value)).toIncludeAllMembers([value]);
    });
});
