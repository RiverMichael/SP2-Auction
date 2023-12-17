import { clearStorage } from "../storage/clearStorage.js";

/**
 * Logs out the user by clearing the local storage and redirecting to the home page.
 */
export function logOutUser() {
  clearStorage();
  window.location.href = "/";
}
