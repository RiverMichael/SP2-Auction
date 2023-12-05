import { handleUserLogin } from "./handleUserLogin.js";
import { createUser } from "./createUser.js";

/**
 * Handles the submission of the login form by creating a user object and passing it to the handleUserLogin function.
 */
export function onLoginFormSubmit(event) {
  event.preventDefault();
  const userDetails = createUser();
  console.log(userDetails);

  handleUserLogin(userDetails);
}
