import { sortObjectArrayByKey } from "./sortObjectArrayByKey";

describe("sortObjectArrayByKey", () => {
    test("returns a new Array of sorted Data with alpa values", () => {
        const lowText = "SMALL";
        const bigText = "BIG";
        const startingData = [
            {
                label: "b",
                value: 2
            },
            {
                label: "a",
                value: lowText
            },
            {
                label: "d",
                value: bigText
            },
            {
                label: "c",
                value: 3
            }
        ];

        const sortedData = sortObjectArrayByKey(startingData, "label");

        expect(sortedData).toBeArrayOfSize(startingData.length);
        expect(sortedData.map((o) => o.value).join(", ")).not.toMatch(
            startingData.map((o) => o.value).join(", ")
        );
        expect(sortedData[0]).toHaveProperty("value", lowText);
        expect(sortedData[sortedData.length - 1]).toHaveProperty("value", bigText);
    });

    test("returns a new Array of sorted Data with alpa values desc", () => {
        const lowText = "SMALL";
        const bigText = "BIG";
        const startingData = [
            {
                label: "b",
                value: 2
            },
            {
                label: "a",
                value: lowText
            },
            {
                label: "d",
                value: bigText
            },
            {
                label: "c",
                value: 3
            }
        ];

        const sortedData = sortObjectArrayByKey(startingData, "label", "desc");

        expect(sortedData).toBeArrayOfSize(startingData.length);
        expect(sortedData.map((o) => o.value).join(", ")).not.toMatch(
            startingData.map((o) => o.value).join(", ")
        );
        expect(sortedData[0]).toHaveProperty("value", bigText);
        expect(sortedData[sortedData.length - 1]).toHaveProperty("value", lowText);
    });

    test("returns a new Array of sorted Data with numberic values", () => {
        const lowText = "SMALL";
        const bigText = "BIG";
        const startingData = [
            {
                label: "b",
                value: 2
            },
            {
                label: lowText,
                value: 1
            },
            {
                label: bigText,
                value: 4
            },
            {
                label: "c",
                value: 3
            }
        ];

        const sortedData = sortObjectArrayByKey(startingData, "value");

        expect(sortedData).toBeArrayOfSize(startingData.length);
        expect(sortedData.map((o) => o.value).join(", ")).not.toMatch(
            startingData.map((o) => o.value).join(", ")
        );

        expect(sortedData[0]).toHaveProperty("label", lowText);
        expect(sortedData[sortedData.length - 1]).toHaveProperty("label", bigText);
    });

    test("returns a new Array of sorted Data with numberic values desc", () => {
        const lowText = "SMALL";
        const bigText = "BIG";
        const startingData = [
            {
                label: "b",
                value: 2
            },
            {
                label: lowText,
                value: 1
            },
            {
                label: bigText,
                value: 4
            },
            {
                label: "c",
                value: 3
            }
        ];

        const sortedData = sortObjectArrayByKey(startingData, "value", "desc");

        expect(sortedData).toBeArrayOfSize(startingData.length);
        expect(sortedData.map((o) => o.value).join(", ")).not.toMatch(
            startingData.map((o) => o.value).join(", ")
        );

        expect(sortedData[0]).toHaveProperty("label", bigText);
        expect(sortedData[sortedData.length - 1]).toHaveProperty("label", lowText);
    });

    test("returns a new Array of sorted Data with Sort Function Passed", () => {
        const lowText = "SMALL";
        const bigText = "BIG";
        const startingData = [
            {
                name: "3W-1",
                diameterInches: "1",
                diameterMm: "24"
            },
            {
                name: "3W-1/2",
                diameterInches: "1/2",
                diameterMm: "12"
            },
            {
                name: "3W-3/4",
                diameterInches: "3/4",
                diameterMm: "18"
            },
            {
                name: "3W-3/8",
                diameterInches: "3/8",
                diameterMm: "10"
            },
            {
                name: "3W-SMALL",
                diameterInches: lowText,
                diameterMm: "0"
            },
            {
                name: "3W-5/16",
                diameterInches: "5/16",
                diameterMm: "8"
            },
            {
                name: "3W-BIG",
                diameterInches: bigText,
                diameterMm: "100"
            },
            {
                name: "3W-5/8",
                diameterInches: "5/8",
                diameterMm: "16"
            },
            {
                name: "3W-7/16",
                diameterInches: "7/16",
                diameterMm: "11"
            },
            {
                name: "3W-7/8",
                diameterInches: "7/8",
                diameterMm: "22"
            },
            {
                name: "3W-9/16",
                diameterInches: "9/16",
                diameterMm: "14"
            }
        ];

        const sortedData = sortObjectArrayByKey(
            startingData,
            "diameterMm",
            (a: string, b: string) => {
                if (Number(a) < Number(b)) {
                    return -1;
                }
                if (Number(a) > Number(b)) {
                    return 1;
                }
                return 0;
            }
        );

        expect(sortedData).toBeArrayOfSize(startingData.length);
        expect(sortedData.map((o) => o.diameterMm).join(", ")).not.toMatch(
            startingData.map((o) => o.diameterMm).join(", ")
        );
        expect(sortedData[0]).toHaveProperty("diameterInches", lowText);
        expect(sortedData[sortedData.length - 1]).toHaveProperty("diameterInches", bigText);
    });
});
