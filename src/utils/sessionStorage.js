// utils/sessionStorage.js

/**
 * Set a value in sessionStorage
 * @param {string} name - The name of the session storage item
 * @param {string} value - The value to store in sessionStorage
 */
export const setSessionStorage = (name, value) => {
    sessionStorage.setItem(name, value);
};

/**
 * Get a value from sessionStorage
 * @param {string} name - The name of the session storage item
 * @returns {string|null} - The value from sessionStorage or null if not found
 */
export const getSessionStorage = (name) => {
    return sessionStorage.getItem(name);
};

/**
 * Remove a value from sessionStorage
 * @param {string} name - The name of the session storage item to remove
 */
export const removeSessionStorage = (name) => {
    sessionStorage.removeItem(name);
};
