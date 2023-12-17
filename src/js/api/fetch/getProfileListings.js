import { doFetch } from "../doFetch.js";
import { profilesURL } from "../constants.js";
import { getData } from "../fetchOptions.js";

export async function getProfileListings(userName) {
  return await doFetch(
    `${profilesURL}${userName}/listings?_active=true&_bids=true`,
    getData,
  );
}
