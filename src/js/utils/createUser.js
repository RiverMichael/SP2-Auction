/**
 * Creates a user object from the login form.
 * @returns {object} - The user object.
 */
export function createUser() {
  const form = document.querySelector("#formLogin");
  const formData = new FormData(form);
  const createLoginObject = Object.fromEntries(formData.entries());

  const user = {
    email: createLoginObject.email,
    password: createLoginObject.password,
  };

  return user;
}
