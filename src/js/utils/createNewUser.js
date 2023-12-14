/**
 * Creates a new user object from the data from the registration form.
 * @returns {Object} - The new user object.
 */
export function createNewUser() {
  const form = document.querySelector("#formRegister");
  const formData = new FormData(form);
  const createRegisterObject = Object.fromEntries(formData.entries());

  const newUser = {
    name: createRegisterObject.name,
    email: createRegisterObject.email,
    password: createRegisterObject.password,
    avatar: createRegisterObject.avatar,
  };

  return newUser;
}
