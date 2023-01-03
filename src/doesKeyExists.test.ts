import { doesKeyExists } from "./doesKeyExists";

describe("doesKeyExists", () => {
    test("returns true if a key does exists on provided object", () => {
        const testObject = { c: "cow" };

        expect(doesKeyExists(testObject, "c")).toBeTrue();
    });

    test("returns false if a key does not exists on provided object", () => {
        const testObject = { c: "cow" };

        expect(doesKeyExists(testObject, "b")).toBeFalse();
    });
});
