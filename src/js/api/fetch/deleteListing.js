import { doFetch } from "../doFetch.js";
import { deleteData } from "../fetchOptions.js";
import { listingDetailsURL } from "../constants.js";

export async function deleteListing() {
  return await doFetch(listingDetailsURL, deleteData);
}
