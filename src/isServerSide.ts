/**
 * Check to see if the function is on a Server or Client
 * @returns if the running application is running on server side
 */
export const isServerSide = (): boolean => {
    return typeof window === "undefined" && typeof document === "undefined";
};
