import { getFromStorage } from "../storage/getFromStorage.js";

const token = getFromStorage("accessToken");

/**
 * Options for a GET request.
 * @type {Object}
 * @property {string} method - The HTTP method.
 * @property {Object} headers - The headers to include in the request.
 * @property {string} headers.Content-Type - The media type of the resource.
 * @property {string} headers.Authorization - The authorization token.
 */
export const getData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

/**
 * Options for a DELETE request.
 * @type {Object}
 * @property {string} method - The HTTP method.
 * @property {Object} headers - The headers to include in the request.
 * @property {string} headers.Content-Type - The media type of the resource.
 * @property {string} headers.Authorization - The authorization token.
 */
export const deleteData = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

/**
 * Creates options for a POST request with the given data.
 * @param {Object} data - The data to be sent in the request body.
 * @returns {Object} - The options for the POST request.
 * @example
 * ```js
 * const data = {
 *   title: 'New item',
 *   description: 'This is a new item',
 * };
 *
 * const options = postData(data);
 * ```
 */
export function postData(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  return options;
}

/**
 * Creates options for a PUT request with the given data.
 * @param {Object} data - The data to be sent in the request body.
 * @returns {Object} - The options for the PUT request.
 * @example
 * ```js
 * const data = {
 *   title: 'Updated item',
 *   description: 'This is an updated item',
 * };
 *
 * const options = putData(data);
 * ```
 */
export function putData(data) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  return options;
}
