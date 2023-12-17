import { handleCreateNewBid } from "../handlers/handleCreateNewBid.js";
import { createNewBid } from "./createNewBid.js";

/**
 * Handles the submit event of the "addBidForm" form.
 * It prevents the default form submission, creates a new bid object using the "createNewBid" function, and handles the creation of the new bid using the "handleCreateNewBid" function.
 * @param {Event} event - The submit event.
 * @example
 * ```js
 * const bidForm = document.querySelector("#addBidForm")
 * bidForm.addEventListener("submit", onAddBidFormSubmit);
 * ```
 */
export function onAddBidFormSubmit(event) {
  event.preventDefault();
  const bidDetails = createNewBid();
  handleCreateNewBid(bidDetails);
}
