/**
 * Saves a key-value pair to the local storage.
 * @param {string} key - The key to save the value under.
 * @param {string} value - The value to save to the local storage.
 * @example
 * ```js
 * saveToStorage('accessToken', 'abc123');
 * ```
 */
export function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
