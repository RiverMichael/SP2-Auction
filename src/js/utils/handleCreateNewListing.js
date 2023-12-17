import { listingsURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { postData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";

export async function handleCreateNewListing(listingDetails) {
  const addListingValidation = document.querySelector("#addListingValidation");
  const addListingValidationFailed = document.querySelector(
    "#addListingValidationFailed",
  );

  try {
    const options = postData(listingDetails);
    const result = await doFetch(listingsURL, options);

    if (result.id) {
      showToast(addListingValidation);
      setTimeout(() => {
        window.location.href = "/listings/";
      }, 1000);
    } else {
      showToast(addListingValidationFailed);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error adding listing");
  }
}
