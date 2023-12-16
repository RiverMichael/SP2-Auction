import { doFetch } from "../api/doFetch.js";
import { authURL } from "../api/constants.js";
import { postData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";
import { handleUserLogin } from "./handleUserLogin.js";

/**
 * Handles the registration of a new user with the API.
 * @param {Object} userDetails - An object containing the details of the user to register.
 * @example
 * ```js
 * const userDetails = {
 *  name: "JohnDoe",
 *  email: "john@stud.noroff.no",
 *  password: "password",
 *  avatar: "https://www.example.com/image.jpg"
 * };
 *
 * handleRegisterUser(userDetails);
 * ```
 */
export async function handleRegisterUser(userDetails) {
  const registrationValidation = document.querySelector(
    "#registrationValidation",
  );
  const registrationValidationFailed = document.querySelector(
    "#registrationValidationFailed",
  );

  try {
    const options = postData(userDetails);
    const result = await doFetch(`${authURL}register`, options);

    if (result.id) {
      showToast(registrationValidation);
      setTimeout(() => {
        handleUserLogin(userDetails);
      }, 1000);
    } else {
      showToast(registrationValidationFailed);
    }
  } catch (error) {
    console.log(error);
  }
}
