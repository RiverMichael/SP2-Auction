import { doFetch } from "../api/doFetch.js";
import { getData } from "../api/fetchOptions.js";
import { allListingsURL } from "../api/constants.js";

/**
 * Fetches an array of listings from the API.
 * @param {Number} numberOfListings  - The number of listings to fetch.
 * @param {Number} offset - The offset of listings to fetch.
 * @returns {Promise<Array>} - An array of listings.
 * @example
 * ```js
 *  const numberOfListings = 100;
 *  const offset = 0;
 *  const listings = await getListings(numberOfListings, offset);
 * ```
 */
export async function getListings(numberOfListings = 100, offset = 0) {
  return await doFetch(
    `${allListingsURL}&limit=${numberOfListings}&${offset}&sort=created&sortOrder=desc`,
    getData,
  );
}
