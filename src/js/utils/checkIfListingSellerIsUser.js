import { displayListingUpdateForm } from "../components/displayListingUpdateForm.js";
import { getFromStorage } from "../storage/getFromStorage.js";

export function checkIfListingSellerIsUser(listing) {
  const listingSeller = listing.seller.name;
  const loggedInUser = getFromStorage("name");
  const addBidButton = document.querySelector("#addBidButton");

  if (listingSeller === loggedInUser) {
    displayListingUpdateForm();
    addBidButton.disabled = true;
  }
}
