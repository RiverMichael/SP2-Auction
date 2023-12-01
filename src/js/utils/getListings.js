import { doFetch } from "../api/doFetch.js";
import { getData } from "../api/fetchOptions.js";
import { listingsURL } from "../api/constants.js";

export async function getListings() {
  return await doFetch(`${listingsURL}?_active=true&_bids=true`, getData);
}
