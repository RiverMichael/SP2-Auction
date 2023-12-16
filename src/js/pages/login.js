import { onLoginFormSubmit } from "../utils/onLoginFormSubmit.js";

/**
 * Sets up the login form submit event listener.
 */
function login() {
  const loginForm = document.querySelector("#formLogin");
  const cancelButton = document.querySelector(".cancelButton");
  loginForm.addEventListener("submit", onLoginFormSubmit);
  cancelButton.addEventListener("click", function () {
    history.back();
  });
}
login();
