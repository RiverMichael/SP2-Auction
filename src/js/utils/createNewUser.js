/**
 * Creates a new user object from the data from the registration form.
 * @returns {Object} - The new user object.
 */
export function createNewUser() {
  const userNameInput = document.querySelector("#registerUsername");
  const emailInput = document.querySelector("#registerEmail");
  const passwordInput = document.querySelector("#registerPassword");
  const avatarInput = document.querySelector("#registerAvatar");

  const newUser = {
    name: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    avatar: avatarInput.value,
  };

  return newUser;
}
