import { doFetch } from "../api/doFetch.js";
import { getData } from "../api/fetchOptions.js";
import { listingDetailsURL } from "../api/constants.js";

export async function getListingDetails() {
  return await doFetch(listingDetailsURL, getData);
}
