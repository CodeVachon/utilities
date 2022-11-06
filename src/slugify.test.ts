import { slugify } from "./slugify";

describe("slugify", () => {
    test.each`
        value                  | expected
        ${"foo"}               | ${"foo"}
        ${"foo bar"}           | ${"foo-bar"}
        ${"Foo Bar"}           | ${"foo-bar"}
        ${"FOO BAR"}           | ${"foo-bar"}
        ${"foo bar baz"}       | ${"foo-bar-baz"}
        ${"foo bar baz "}      | ${"foo-bar-baz"}
        ${" foo bar baz"}      | ${"foo-bar-baz"}
        ${" foo bar baz "}     | ${"foo-bar-baz"}
        ${"foo & bar"}         | ${"foo-bar"}
        ${"foo & bar "}        | ${"foo-bar"}
        ${" foo & bar"}        | ${"foo-bar"}
        ${" foo & bar "}       | ${"foo-bar"}
        ${"foo & bar 1"}       | ${"foo-bar-1"}
        ${"foo & bar 1 "}      | ${"foo-bar-1"}
        ${" foo & bar 1"}      | ${"foo-bar-1"}
        ${" foo & bar 1 "}     | ${"foo-bar-1"}
        ${" foo & 2   bar 1 "} | ${"foo-2-bar-1"}
    `(`returns the expected result for "$value"`, ({ value, expected }) => {
        expect(slugify(value)).toMatch(expected);
    });
});
