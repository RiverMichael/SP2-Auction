import { createNewUser } from "./createNewUser.js";
import { handleRegisterUser } from "../handlers/handleRegisterUser.js";

/**
 * Handles the submit event of the registration form.
 * It prevents the default form submission, creates a new user using the "createNewUser" function, and handles the user registration using the "handleRegisterUser" function.
 * @param {Event} event - The submit event.
 * @example
 * ```js
 * const registerForm = document.querySelector("#registerForm")
 * registerForm.addEventListener("submit", onRegisterFormSubmit);
 * ```
 */
export function onRegisterFormSubmit(event) {
  event.preventDefault();
  const userDetails = createNewUser();
  handleRegisterUser(userDetails);
}
