import { getFromStorage } from "../utils/getFromStorage.mjs";

const token = getFromStorage("accessToken");

export const getData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const deleteData = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

/**
 * Creates options for a POST request with the given listing details.
 * @param {Object} listingDetails - The details of the listing to create.
 * @returns {Object} - The options for the POST request.
 * @example
 * ```js
 * const listingDetails = {
 *   title: 'New listing',
 *   description: 'This is a new listing',
 * };
 *
 * const options = postData(listingDetails);
 * ```
 */
export function postData(listingDetails) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(listingDetails),
  };

  return options;
}

/**
 * Creates options for a PUT request with the updated listing details.
 * @param {Object} updatedListingDetails - The updated details of the listing.
 * @returns {Object} - The options for the PUT request.
 * @example
 * ```js
 * const updatedListingDetails = {
 *   title: 'Updated listing',
 *   description: 'This is an updated listing',
 * };
 *
 * const options = putData(updatedListingDetails);
 * ```
 */
export function putData(updatedListingDetails) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedListingDetails),
  };

  return options;
}
