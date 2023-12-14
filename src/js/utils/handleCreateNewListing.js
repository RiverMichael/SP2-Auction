import { listingsURL } from "../api/constants.js";
import { createNewListing } from "./createNewListing.js";
import { doFetch } from "../api/doFetch.js";
import { postData } from "../api/fetchOptions.js";

export async function handleCreateNewListing() {
  try {
    const listingDetails = createNewListing();
    const options = postData(listingDetails);
    return await doFetch(listingsURL, options);
  } catch (error) {
    console.log(error);
    throw new Error("Error adding listing");
  }
}
