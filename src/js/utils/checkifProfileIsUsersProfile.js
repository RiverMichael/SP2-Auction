import { getFromStorage } from "../storage/getFromStorage.js";
import { getProfileName } from "./getProfileName.js";

/**
 * Checks if the currently viewed profile belongs to the logged-in user.
 * It fetches the user's name from the local storage and the profile name from the profile page.
 * If the names do not match, it hides the "Change Avatar" button, the profile credits, and disables the "Active Bids" tab.
 * @example
 * ```js
 * checkIfProfileIsUsersProfile();
 * ```
 */
export function checkIfProfileIsUsersProfile() {
  const userName = getFromStorage("name");
  const profileName = getProfileName();
  const changeAvatarButton = document.querySelector("#changeAvatarButton");
  const profileCredits = document.querySelector("#profileCredits");
  const activeBidsButton = document.querySelector("#activeBids-tab");

  if (userName !== profileName) {
    changeAvatarButton.classList.add("d-none");
    profileCredits.classList.add("d-none");
    activeBidsButton.disabled = true;
  }
}
