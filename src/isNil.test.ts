import { isNil } from "./isNil";

describe("isNil", () => {
    test.each([
        { value: undefined, expected: true },
        { value: null, expected: true },
        { value: "", expected: false },
        { value: 0, expected: false },
        { value: -1, expected: false },
        { value: 1, expected: false },
        { value: "banana", expected: false },
        { value: () => {}, expected: false },
        { value: [], expected: false },
        { value: {}, expected: false }
    ])("return $expected for $value", ({ value, expected }) => {
        expect(isNil(value)).toBe(expected);
    });
});
