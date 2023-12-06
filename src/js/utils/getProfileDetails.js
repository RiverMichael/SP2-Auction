import { doFetch } from "../api/doFetch.js";
import { profilesURL } from "../api/constants.js";
import { getData } from "../api/fetchOptions.js";

/**
 * Fetches the profile details for a given user.
 * @param {String} userName - The user name to fetch.
 * @returns {Promise<Object>} - The profile details for the given user.
 * @example
 * ```js
 *  const userName = "john";
 *  const profileDetails = await getProfileDetails(userName);
 * ```
 */
export async function getProfileDetails(userName) {
  return await doFetch(`${profilesURL}${userName}?_listings`, getData);
}
