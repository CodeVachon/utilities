import { asBool } from "./asBool";

describe("asBool", () => {
    test.each`
        value        | as             | expected
        ${true}      | ${"boolean"}   | ${true}
        ${false}     | ${"boolean"}   | ${false}
        ${"true"}    | ${"string"}    | ${true}
        ${"false"}   | ${"string"}    | ${false}
        ${"1"}       | ${"string"}    | ${true}
        ${"0"}       | ${"string"}    | ${false}
        ${"-1"}      | ${"string"}    | ${false}
        ${"N"}       | ${"string"}    | ${false}
        ${"n"}       | ${"string"}    | ${false}
        ${"No"}      | ${"string"}    | ${false}
        ${"no"}      | ${"string"}    | ${false}
        ${"off"}     | ${"string"}    | ${false}
        ${"Off"}     | ${"string"}    | ${false}
        ${"OFF"}     | ${"string"}    | ${false}
        ${"Y"}       | ${"string"}    | ${true}
        ${"y"}       | ${"string"}    | ${true}
        ${"Yes"}     | ${"string"}    | ${true}
        ${"yes"}     | ${"string"}    | ${true}
        ${"on"}      | ${"string"}    | ${true}
        ${"On"}      | ${"string"}    | ${true}
        ${"ON"}      | ${"string"}    | ${true}
        ${1}         | ${"number"}    | ${true}
        ${0}         | ${"number"}    | ${false}
        ${-1}        | ${"number"}    | ${false}
        ${undefined} | ${"undefined"} | ${false}
    `(`returns $expected for "$value" as $as`, ({ value, expected }) => {
        const result = asBool(value);
        expect(result).toBeBoolean();
        expect(result).toEqual(expected);
    });
});
