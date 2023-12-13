import { getFromStorage } from "../utils/getFromStorage.js";

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
