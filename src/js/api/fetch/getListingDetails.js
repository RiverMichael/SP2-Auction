import { doFetch } from "../doFetch.js";
import { getData } from "../fetchOptions.js";
import { listingDetailsURL } from "../constants.js";

export async function getListingDetails() {
  return await doFetch(listingDetailsURL, getData);
}
