import { onRegisterFormSubmit } from "../utils/onRegisterFormSubmit.js";
import { bootstrapFormValidation } from "../components/bootstrapFormValidation.js";

/**
 * Sets up the register form submit event listener.
 * It adds an event listener to the register form to handle the form submission.
 * It also adds an event listener to the "Cancel" button to go back to the previous page when clicked.
 * Finally, it initializes the form validation.
 * @example
 * ```js
 * register();
 * ```
 */
function register() {
  const registerForm = document.querySelector("#formRegister");
  const cancelButton = document.querySelector(".cancelButton");
  registerForm.addEventListener("submit", onRegisterFormSubmit);
  cancelButton.addEventListener("click", function () {
    history.back();
  });

  bootstrapFormValidation();
}
register();
