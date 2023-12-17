import { handleCreateNewListing } from "../handlers/handleCreateNewListing.js";
import { createNewListing } from "./createNewListing.js";

/**
 * Handles the submit event of the create new listing form.
 * It prevents the default form submission, creates a new listing using the "createNewListing" function, and handles the creation of the new listing using the "handleCreateNewListing" function.
 * @param {Event} event - The submit event.
 * @example
 * ```js
 * const newListingForm = document.querySelector("#createNewListingForm")
 * newListingForm.addEventListener("submit", onCreateNewListingFormSubmit);
 * ```
 */
export function onCreateNewListingFormSubmit(event) {
  event.preventDefault();
  const listingDetails = createNewListing();
  handleCreateNewListing(listingDetails);
}
