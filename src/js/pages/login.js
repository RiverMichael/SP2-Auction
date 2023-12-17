import { onLoginFormSubmit } from "../utils/onLoginFormSubmit.js";
import { bootstrapFormValidation } from "../components/bootstrapFormValidation.js";

/**
 * Sets up the login form submit event listener.
 * It adds an event listener to the login form to handle the form submission.
 * It also adds an event listener to the "Cancel" button to go back to the previous page when clicked.
 * Finally, it initializes the form validation.
 * @example
 * ```js
 * login();
 * ```
 */
function login() {
  const loginForm = document.querySelector("#formLogin");
  const cancelButton = document.querySelector(".cancelButton");
  loginForm.addEventListener("submit", onLoginFormSubmit);
  cancelButton.addEventListener("click", function () {
    history.back();
  });

  bootstrapFormValidation();
}
login();
