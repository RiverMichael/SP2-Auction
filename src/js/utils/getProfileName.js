import { getFromStorage } from "../storage/getFromStorage.js";

export function getProfileName() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const profileName = params.get("name");
  const userName = getFromStorage("name");

  if (userName !== profileName) {
    return profileName;
  } else {
    return userName;
  }
}
