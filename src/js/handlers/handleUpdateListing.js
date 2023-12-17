import { listingDetailsURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { putData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";
import { displayListingDetails } from "../pages/listing.js";
import { closeAccordion } from "../components/closeAccordion.js";

/**
 * Handles the updating of a listing.
 * If the listing is successfully updated, it shows a toast message and then closes the accordion and refreshes the listing details after 1 second.
 * If the listing update fails, it shows a different toast message.
 * @param {Object} listingDetails - The details of the listing to be updated.
 * @throws {Error} Will throw an error if the fetch operation fails.
 * @example
 * ```js
 * const listingDetails = { id: 1, title: "Updated Listing", description: "This is an updated listing." };
 * handleUpdateListing(listingDetails);
 * ```
 */
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
