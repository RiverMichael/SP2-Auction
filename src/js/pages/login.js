import { onLoginFormSubmit } from "../utils/onLoginFormSubmit.js";

/**
 * Sets up the login form submit event listener.
 */
function login() {
  const loginForm = document.querySelector("#formLogin");
  loginForm.addEventListener("submit", onLoginFormSubmit);
}
login();
