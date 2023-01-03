type SortFunction = (valueA: any, valueB: any) => -1 | 0 | 1;
/**
 * Sorts an array of objects by a key.
 * @param arr The Array of Objects to be Sorted
 * @param key The Key of the Object to Sort the Array By
 * @param sortFunction the Direction to Sort the Array or a Custom Sort Function
 * @returns a new Array of Objects sorted by the provided key
 */
export const sortObjectArrayByKey = <T = object>(
    arr: T[],
    key: keyof T,
    sortFunction: "asc" | "desc" | SortFunction = "asc"
) => {
    const newArray = [...arr];

    if (typeof sortFunction !== "function") {
        if (String(sortFunction).toLowerCase() === "desc") {
            sortFunction = (valueA, valueB) => {
                if (valueA > valueB) {
                    return -1;
                }
                if (valueA < valueB) {
                    return 1;
                }
                return 0;
            };
        } else {
            sortFunction = (valueA, valueB) => {
                if (valueA < valueB) {
                    return -1;
                }
                if (valueA > valueB) {
                    return 1;
                }
                return 0;
            };
        }
    }

    newArray.sort((a, b) => {
        return (sortFunction as SortFunction)(a[key], b[key]);
    });

    return newArray;
};
