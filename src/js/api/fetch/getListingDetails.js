import { doFetch } from "../doFetch.js";
import { getData } from "../fetchOptions.js";
import { listingDetailsURL } from "../constants.js";

/**
 * Retrieves listing details by making a GET request to the listingDetailsURL.
 * @returns {Promise} Returns a Promise that resolves to the response of the GET request.
 */
export async function getListingDetails() {
  return await doFetch(listingDetailsURL, getData);
}
