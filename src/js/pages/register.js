import { onRegisterFormSubmit } from "../utils/onRegisterFormSubmit.js";
/**
 * Sets up the register form submit event listener.
 */
function register() {
  const registerForm = document.querySelector("#formRegister");
  const cancelButton = document.querySelector(".cancelButton");
  registerForm.addEventListener("submit", onRegisterFormSubmit);
  cancelButton.addEventListener("click", function () {
    history.back();
  });
}
register();
