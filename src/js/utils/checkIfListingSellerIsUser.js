import { displayListingUpdateForm } from "../components/displayListingUpdateForm.js";
import { getFromStorage } from "../storage/getFromStorage.js";

/**
 * Checks if the currently logged-in user is the seller of a listing.
 * It fetches the currently logged-in user from the local storage and compares it with the seller of the listing.
 * @param {Object} listing - The listing to check.
 * @returns {boolean} Returns true if the currently logged-in user is the seller of the listing, false otherwise.
 * @example
 * ```js
 * const listing = { id: 1, seller: { id: 2 } };
 * const isSeller = checkIfListingSellerIsUser(listing);
 * ```
 */
export function checkIfListingSellerIsUser(listing) {
  const listingSeller = listing.seller.name;
  const loggedInUser = getFromStorage("name");
  const addBidButton = document.querySelector("#addBidButton");

  if (listingSeller === loggedInUser) {
    displayListingUpdateForm();
    addBidButton.disabled = true;
  }
}
