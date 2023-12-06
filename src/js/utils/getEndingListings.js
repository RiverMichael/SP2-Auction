import { doFetch } from "../api/doFetch.js";
import { getData } from "../api/fetchOptions.js";
import { allListingsURL } from "../api/constants.js";

/**
 * Fetches an array of listings from the API sorted by first ending.
 * @param {Number} numberOfListings  - The number of listings to fetch.
 * @param {Number} offset - The offset of listings to fetch.
 * @returns {Promise<Array>} - An array of listings.
 * @example
 * ```js
 *  const numberOfListings = 100;
 *  const offset = 0;
 *  const listings = await getEndingListings(numberOfListings, offset);
 * ```
 */
export async function getEndingListings(numberOfListings = 100, offset = 0) {
  return await doFetch(
    `${allListingsURL}&limit=${numberOfListings}&${offset}&sort=endsAt&sortOrder=asc`,
    getData,
  );
}
