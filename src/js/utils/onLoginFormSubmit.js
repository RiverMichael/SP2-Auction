import { handleUserLogin } from "../handlers/handleUserLogin.js";
import { createUser } from "./createUser.js";

/**
 * Handles the submit event of the login form.
 * It prevents the default form submission, creates a user using the "createUser" function, and handles the user login using the "handleUserLogin" function.
 * @param {Event} event - The submit event.
 * @example
 * ```js
 * const loginForm = document.querySelector("#loginForm")
 * loginForm.addEventListener("submit", onLoginFormSubmit);
 * ```
 */
export function onLoginFormSubmit(event) {
  event.preventDefault();
  const userDetails = createUser();
  handleUserLogin(userDetails);
}
