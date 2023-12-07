import { getFromStorage } from "../utils/getFromStorage.js";

export function enableBidButton() {
  const isUserLoggedIn = getFromStorage("accessToken");
  const addBidButton = document.querySelector("#addBidButton");
  const addBidText = document.querySelector("#addBidText");

  if (isUserLoggedIn) {
    addBidButton.disabled = false;
    addBidText.classList.add("d-none");
  } else {
    addBidButton.disabled = true;
    addBidText.classList.remove("d-none");
  }
}
