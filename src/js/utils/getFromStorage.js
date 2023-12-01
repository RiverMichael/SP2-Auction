/**
 * Gets the value of a key from local storage.
 * @param {string} key - The key to get the value for.
 * @returns {string|null} - The value of the key, or null if the key does not exist.
 * @example
 * ```js
 * const accessToken = getFromStorage('accessToken');
 * ```
 */
export function getFromStorage(key) {
  const value = localStorage.getItem(key);

  return value;
}
