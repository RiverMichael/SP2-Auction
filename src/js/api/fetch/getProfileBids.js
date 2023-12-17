import { doFetch } from "../doFetch.js";
import { profilesURL } from "../constants.js";
import { getData } from "../fetchOptions.js";

export async function getProfileBids(userName) {
  return await doFetch(
    `${profilesURL}${userName}/bids?_sort=listing.endsAt&sortOrder=desc&_listings=true`,
    getData,
  );
}
