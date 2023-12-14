import { listingDetailsURL } from "../api/constants.js";
import { createUpdatedListing } from "./createUpdatedListing.js";
import { doFetch } from "../api/doFetch.js";
import { putData } from "../api/fetchOptions.js";

export async function handleUpdateListing() {
  try {
    const listingDetails = createUpdatedListing();
    const options = putData(listingDetails);
    return await doFetch(listingDetailsURL, options);
  } catch (error) {
    console.log(error);
    throw new Error("Error updating listing");
  }
}
