import { doFetch } from "../api/doFetch.js";
import { profilesURL } from "../api/constants.js";
import { getData } from "../api/fetchOptions.js";

export async function getProfileBids(userName) {
  return await doFetch(
    `${profilesURL}${userName}/bids?_sort=listing.endsAt&sortOrder=desc&_listings=true`,
    getData,
  );
}
