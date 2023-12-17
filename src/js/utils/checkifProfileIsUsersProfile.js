import { getFromStorage } from "../storage/getFromStorage.js";
import { getProfileName } from "./getProfileName.js";

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
