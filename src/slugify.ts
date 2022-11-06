/**
 * Turns the provided string into a cleaned and consistent URL safe string
 * @param value the string to transformed into a slug
 * @returns the a slugified version of the provided string
 */
export const slugify = (value: string) =>
    String(value)
        .toLowerCase()
        .trim()
        .replace(new RegExp("[^a-z0-9-_]", "gi"), "-")
        .replace(new RegExp("-{2,}", "g"), "-")
        .replace(new RegExp("-?([a-z0-9][a-z0-9-_]{1,}[a-z0-9])-?", "g"), "$1");
