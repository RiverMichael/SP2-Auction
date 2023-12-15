import { doFetch } from "../api/doFetch.js";
import { profilesURL } from "../api/constants.js";
import { getData } from "../api/fetchOptions.js";

export async function getProfileListings(userName) {
  return await doFetch(
    `${profilesURL}${userName}/listings?_active=true&_bids=true`,
    getData,
  );
}
