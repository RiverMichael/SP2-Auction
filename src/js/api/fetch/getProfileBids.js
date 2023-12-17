import { doFetch } from "../doFetch.js";
import { profilesURL } from "../constants.js";
import { getData } from "../fetchOptions.js";

/**
 * Fetches the bids of a specific user profile by making a GET request to the profilesURL.
 * The bids are sorted by the listing end time in descending order.
 * @param {String} userName - The username of the profile to fetch bids for.
 * @returns {Promise} Returns a Promise that resolves to the response of the GET request.
 * @example
 * ```js
 *  const userName = 'JohnDoe';
 *  const profileBids = await getProfileBids(userName);
 * ```
 */
export async function getProfileBids(userName) {
  return await doFetch(
    `${profilesURL}${userName}/bids?_sort=listing.endsAt&sortOrder=desc&_listings=true`,
    getData,
  );
}
