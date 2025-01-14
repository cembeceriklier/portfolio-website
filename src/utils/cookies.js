// utils/cookies.js
import { Cookies } from 'react-cookie';

// Create a new instance of Cookies
const cookies = new Cookies();

/**
 * Set a cookie
 * @param {string} name - The name of the cookie
 * @param {string} value - The value to be stored in the cookie
 * @param {object} options - Additional cookie options (path, maxAge, etc.)
 */
export const setCookie = (name, value, options = {}) => {
  const defaultOptions = { path: '/', maxAge: 60 * 60 * 24 * 7 }; // 7 gün
  cookies.set(name, value, { ...defaultOptions, ...options });
};

/**
 * Get a value from a cookie
 * @param {string} name - The name of the cookie
 * @returns {string|null} - The value from the cookie, or null if not found
 */
export const getCookie = (name) => {
  return cookies.get(name);
};

/**
 * Remove a cookie
 * @param {string} name - The name of the cookie to be removed
 * @param {object} options - Options for cookie removal
 */
export const removeCookie = (name, options = {}) => {
  cookies.remove(name, { path: '/', ...options });
};
