import { getFromStorage } from "../storage/getFromStorage.js";

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
