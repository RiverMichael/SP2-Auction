import { createNewUser } from "./createNewUser.js";
import { handleRegisterUser } from "./handleRegisterUser.js";

/**
 * Handles the submission of the registration form by preventing the default behavior of the form and creating a new user object, and registering the user with the API.
 */
export function onRegisterFormSubmit(event) {
  event.preventDefault();
  const userDetails = createNewUser();
  handleRegisterUser(userDetails);
}
