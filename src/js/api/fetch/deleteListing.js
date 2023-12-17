import { doFetch } from "../doFetch.js";
import { deleteData } from "../fetchOptions.js";
import { listingDetailsURL } from "../constants.js";

/**
 * Deletes a listing by making a DELETE request to the listingDetailsURL.
 * @returns {Promise} Returns a Promise that resolves to the response of the DELETE request.
 */
export async function deleteListing() {
  return await doFetch(listingDetailsURL, deleteData);
}
