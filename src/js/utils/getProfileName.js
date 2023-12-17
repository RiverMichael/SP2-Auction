import { getFromStorage } from "../storage/getFromStorage.js";

/**
 * Fetches the profile name from the URL query string or local storage.
 * It first tries to get the profile name from the URL query string.
 * If the profile name from the URL does not match the user name from local storage, it returns the profile name from the URL.
 * Otherwise, it returns the user name from local storage.
 * @returns {string} The profile name.
 * @example
 * ```js
 * const profileName = getProfileName();
 * ```
 */
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
