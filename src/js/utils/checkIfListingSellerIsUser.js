import { displayListingUpdateForm } from "../components/displayListingUpdateForm.js";
import { getFromStorage } from "./getFromStorage.js";

export function checkIfListingSellerIsUser(listing) {
  const listingSeller = listing.seller.name;
  const loggedInUser = getFromStorage("name");

  if (listingSeller === loggedInUser) {
    displayListingUpdateForm();
  }
}
