import { isServerSide } from "./isServerSide";

describe("isServerSide", () => {
    describe("on server side", () => {
        test("returns true", () => {
            expect(isServerSide()).toBeTrue();
        });
    });

    describe("on client (mocked) side", () => {
        beforeAll(() => {
            // @ts-ignore - it just needs a value for this test
            global.window = () => {};
            // @ts-ignore - it just needs a value for this test
            global.document = () => {};
        });

        afterAll(() => {
            // @ts-ignore - it just needs a value for this test
            global.window = undefined;
            // @ts-ignore - it just needs a value for this test
            global.document = undefined;
        });
        test("returns false", () => {
            expect(isServerSide()).toBeFalse();
        });
    });
});
