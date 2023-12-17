import { getFromStorage } from "../storage/getFromStorage.js";

/**
 * Displays the a link to the sellers profile if the user is logged in, otherwise displays the seller name.
 * The function checks if an access token is stored to determine if the user is logged in.
 * @example
 * ```js
 * displaySellerDetails();
 * ```
 */
export function displaySellerDetails() {
  const isUserLoggedIn = getFromStorage("accessToken");
  const sellerDetailsLink = document.querySelector("#sellerDetailsLink");
  const sellerDetailsText = document.querySelector("#sellerDetailsText");

  if (isUserLoggedIn) {
    sellerDetailsLink.classList.remove("d-none");
    sellerDetailsText.classList.add("d-none");
  } else {
    sellerDetailsLink.classList.add("d-none");
    sellerDetailsText.classList.remove("d-none");
  }
}
