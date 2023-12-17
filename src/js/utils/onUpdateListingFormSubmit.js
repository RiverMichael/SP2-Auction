import { handleUpdateListing } from "../handlers/handleUpdateListing.js";
import { createUpdatedListing } from "./createUpdatedListing.js";

/**
 * Handles the submit event of the update listing form.
 * It prevents the default form submission, creates an updated listing using the "createUpdatedListing" function, and handles the update of the listing using the "handleUpdateListing" function.
 * @param {Event} event - The submit event.
 * @example
 * ```js
 * const updateListingForm = document.querySelector("#updateListingForm")
 * updateListingForm.addEventListener("submit", onUpdateListingFormSubmit);
 * ```
 */
export function onUpdateListingFormSubmit(event) {
  event.preventDefault();
  const listingDetails = createUpdatedListing();
  handleUpdateListing(listingDetails);
}
