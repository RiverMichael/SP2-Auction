import { getFromStorage } from "../storage/getFromStorage.js";

/**
 * Displays all bids if the user is logged in, otherwise displays a message.
 * The function checks if an access token is stored to determine if the user is logged in.
 * @example
 * ```js
 * displayAllBids();
 * ```
 */
export function displayAllBids() {
  const isUserLoggedIn = getFromStorage("accessToken");
  const allBidsText = document.querySelector("#allBidsText");
  const allBidsList = document.querySelector("#allBidsList");

  if (isUserLoggedIn) {
    allBidsList.classList.remove("d-none");
    allBidsText.classList.add("d-none");
  } else {
    allBidsList.classList.add("d-none");
    allBidsText.classList.remove("d-none");
  }
}
