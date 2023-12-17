import { doFetch } from "../doFetch.js";
import { profilesURL } from "../constants.js";
import { getData } from "../fetchOptions.js";

/**
 * Fetches the active listings of a specific user profile by making a GET request to the profilesURL.
 * @param {String} userName - The username of the profile to fetch listings for.
 * @returns {Promise<Array>} - Returns a Promise that resolves to an array of listings.
 * @example
 * ```js
 *  const userName = 'JohnDoe';
 *  const profileListings = await getProfileListings(userName);
 * ```
 */
export async function getProfileListings(userName) {
  return await doFetch(
    `${profilesURL}${userName}/listings?_active=true&_bids=true`,
    getData,
  );
}
