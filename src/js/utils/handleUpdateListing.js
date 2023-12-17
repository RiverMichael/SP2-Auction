import { listingDetailsURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { putData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";
import { displayListingDetails } from "../pages/listing.js";
import { closeAccordion } from "../components/closeAccordion.js";

export async function handleUpdateListing(listingDetails) {
  const updateListingValidation = document.querySelector(
    "#updateListingValidation",
  );
  const updateListingValidationFailed = document.querySelector(
    "#updateListingValidationFailed",
  );

  try {
    const options = putData(listingDetails);
    const result = await doFetch(listingDetailsURL, options);

    if (result) {
      showToast(updateListingValidation);
      setTimeout(() => {
        closeAccordion();
        displayListingDetails();
      }, 1000);
    } else {
      showToast(updateListingValidationFailed);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error updating listing");
  }
}
