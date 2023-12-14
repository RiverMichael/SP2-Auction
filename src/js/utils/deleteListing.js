import { doFetch } from "../api/doFetch.js";
import { deleteData } from "../api/fetchOptions.js";
import { listingDetailsURL } from "../api/constants.js";

export async function deleteListing() {
  return await doFetch(listingDetailsURL, deleteData);
}
