/**
 * Creates a user object from the login form.
 * @returns {object} - The user object.
 */
export function createUser() {
  const emailInput = document.querySelector("#loginEmail");
  const passwordInput = document.querySelector("#loginPassword");

  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  return user;
}
