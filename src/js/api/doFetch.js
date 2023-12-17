/**
 * Performs a fetch request to the specified URL with the given options.
 * @param {string} url - The URL to fetch.
 * @param {Object} [customOptions={}] - The custom options to include in the fetch request. Defaults to an empty object.
 * @returns {Promise} - The JSON response from the fetch request.
 * @throws {Error} Will throw an error if the fetch request fails.
 * @example
 * ```js
 * const data = await doFetch('https://example.com/api/data', {
 *   headers: {
 *     Authorization: 'Bearer <token>',
 *   },
 * });
 * ```
 */
export async function doFetch(url, customOptions = {}) {
  try {
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...customOptions,
    };
    const response = await fetch(url, defaultOptions);
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
