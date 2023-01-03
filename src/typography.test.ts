import {
    camelCase,
    capitalize,
    contains,
    endsWith,
    lowercase,
    pascalCase,
    startsWith,
    uppercase
} from "./typography";

describe("typography", () => {
    describe("capitalize", () => {
        test("throws an error if a none string is passed in", () => {
            expect(() => {
                // @ts-ignore
                capitalize(true);
            }).toThrowError(new RegExp("boolean", "i"));
        });
        test.each`
            value        | expected
            ${"foo"}     | ${"Foo"}
            ${"foo bar"} | ${"Foo bar"}
        `(`returns the expected result for "$value"`, ({ value, expected }) => {
            expect(capitalize(value)).toMatch(expected);
        });
    });

    describe("uppercase", () => {
        test("throws an error if a none string is passed in", () => {
            expect(() => {
                // @ts-ignore
                uppercase(true);
            }).toThrowError(new RegExp("boolean", "i"));
        });
        test.each`
            value        | expected
            ${"foo"}     | ${"FOO"}
            ${"foo bar"} | ${"FOO BAR"}
        `(`returns the expected result for "$value"`, ({ value, expected }) => {
            expect(uppercase(value)).toMatch(expected);
        });
    });

    describe("lowercase", () => {
        test("throws an error if a none string is passed in", () => {
            expect(() => {
                // @ts-ignore
                lowercase(true);
            }).toThrowError(new RegExp("boolean", "i"));
        });
        test.each`
            value        | expected
            ${"Foo"}     | ${"foo"}
            ${"Foo Bar"} | ${"foo bar"}
        `(`returns the expected result for "$value"`, ({ value, expected }) => {
            expect(lowercase(value)).toMatch(expected);
        });
    });

    describe("camelCase", () => {
        test("throws an error if a none string is passed in", () => {
            expect(() => {
                // @ts-ignore
                camelCase(true);
            }).toThrowError(new RegExp("boolean", "i"));
        });

        test.each`
            value               | expected
            ${"ReviewQuestion"} | ${"reviewQuestion"}
            ${"Foo Bar"}        | ${"fooBar"}
            ${"foo bar"}        | ${"fooBar"}
            ${"foo_bar"}        | ${"fooBar"}
            ${"foo_bar_baz"}    | ${"fooBarBaz"}
            ${"foo_Bar"}        | ${"fooBar"}
            ${"foo-bar"}        | ${"fooBar"}
            ${"foo-bar-baz"}    | ${"fooBarBaz"}
            ${"foo-Bar"}        | ${"fooBar"}
        `(`returns the expected result for "$value"`, ({ value, expected }) => {
            expect(camelCase(value)).toMatch(expected);
        });
    });

    describe("pascalCase", () => {
        test("throws an error if a none string is passed in", () => {
            expect(() => {
                // @ts-ignore
                pascalCase(true);
            }).toThrowError(new RegExp("boolean", "i"));
        });

        test.each`
            value               | expected
            ${"reviewquestion"} | ${"Reviewquestion"}
            ${"ReviewQuestion"} | ${"ReviewQuestion"}
            ${"Foo Bar"}        | ${"FooBar"}
            ${"foo bar"}        | ${"FooBar"}
            ${"foo_bar"}        | ${"FooBar"}
            ${"foo_bar_baz"}    | ${"FooBarBaz"}
            ${"foo_Bar"}        | ${"FooBar"}
            ${"foo-bar"}        | ${"FooBar"}
            ${"foo-bar-baz"}    | ${"FooBarBaz"}
            ${"foo-Bar"}        | ${"FooBar"}
        `(`returns the expected result for "$value"`, ({ value, expected }) => {
            expect(pascalCase(value)).toMatch(expected);
        });
    });

    describe("startsWith", () => {
        test.each`
            value               | condition   | flags        | expected
            ${"reviewquestion"} | ${"Review"} | ${undefined} | ${true}
            ${"reviewquestion"} | ${"Review"} | ${""}        | ${false}
            ${"reviewquestion"} | ${"Foo"}    | ${undefined} | ${false}
            ${"reviewquestion"} | ${"Foo"}    | ${""}        | ${false}
            ${12345}            | ${123}      | ${""}        | ${true}
            ${12345}            | ${678}      | ${""}        | ${false}
        `(
            `returns the expected result for "$value" with "$condition" and flags "$flags"`,
            ({ value, condition, flags, expected }) => {
                expect(startsWith(value, condition, flags)).toBe(expected);
            }
        );
    });

    describe("endsWith", () => {
        test.each`
            value               | condition     | flags        | expected
            ${"reviewquestion"} | ${"question"} | ${undefined} | ${true}
            ${"reviewquestion"} | ${"Question"} | ${""}        | ${false}
            ${"reviewquestion"} | ${"Pie"}      | ${undefined} | ${false}
            ${"reviewquestion"} | ${"Foo"}      | ${""}        | ${false}
            ${12345}            | ${345}        | ${""}        | ${true}
            ${12345}            | ${678}        | ${""}        | ${false}
        `(
            `returns the expected result for "$value" with "$condition" and flags "$flags"`,
            ({ value, condition, flags, expected }) => {
                expect(endsWith(value, condition, flags)).toBe(expected);
            }
        );
    });

    describe("contains", () => {
        test.each`
            value               | condition           | flags        | expected
            ${"reviewquestion"} | ${"ewques"}         | ${undefined} | ${true}
            ${"reviewquestion"} | ${"ewQues"}         | ${""}        | ${false}
            ${"reviewquestion"} | ${"reviewquestion"} | ${undefined} | ${true}
            ${"reviewquestion"} | ${"reviewQuestion"} | ${undefined} | ${true}
            ${"reviewquestion"} | ${"Pie"}            | ${undefined} | ${false}
            ${"reviewquestion"} | ${"Foo"}            | ${""}        | ${false}
            ${12345}            | ${234}              | ${""}        | ${true}
            ${12345}            | ${678}              | ${""}        | ${false}
            ${12345}            | ${234}              | ${undefined} | ${true}
            ${12345}            | ${678}              | ${undefined} | ${false}
        `(
            `returns the expected result for "$value" with "$condition" and flags "$flags"`,
            ({ value, condition, flags, expected }) => {
                expect(contains(value, condition, flags)).toBe(expected);
            }
        );
    });
});
