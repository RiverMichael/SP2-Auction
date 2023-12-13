import { bidsURL } from "../api/constants.js";
import { createNewBid } from "./createNewBid.js";
import { doFetch } from "../api/doFetch.js";
import { postData } from "../api/fetchOptions.js";

export async function handleCreateNewBid() {
  try {
    const bidDetails = createNewBid();
    const options = postData(bidDetails);

    return await doFetch(bidsURL, options);
  } catch (error) {
    console.log(error);
    throw new Error("Error adding bid");
  }
}
