import { logOutUser } from "../utils/logOutUser.js";

/**
 * Handles the user logout process.
 * It adds an event listener to all logout buttons. When a logout button is clicked, it calls the `logOutUser` function.
 * @example
 * ```js
 * handleLogOutUser();
 * ```
 */
export function handleLogOutUser() {
  const logOutButtons = document.querySelectorAll(".button-logout");
  logOutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      logOutUser();
    });
  });
}
