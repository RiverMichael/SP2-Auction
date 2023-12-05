import { onRegisterFormSubmit } from "../utils/onRegisterFormSubmit.js";
/**
 * Sets up the register form submit event listener.
 */
function register() {
  const registerForm = document.querySelector("#formRegister");
  registerForm.addEventListener("submit", onRegisterFormSubmit);
}
register();
