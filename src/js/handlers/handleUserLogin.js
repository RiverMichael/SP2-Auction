import { doFetch } from "../api/doFetch.js";
import { authURL } from "../api/constants.js";
import { saveToStorage } from "../storage/saveToStorage.js";
import { postData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";

/**
 * Handles the login of a user with the API.
 * @param {Object} userDetails - An object containing the details of the user to login.
 * @example
 * ```js
 * const userDetails = {
 *  email: "john@stud.noroff.no",
 *  password: "password",
 * };
 *
 * handleUserLogin(userDetails);
 * ```
 */
export async function handleUserLogin(userDetails) {
  const loginValidation = document.querySelector("#loginValidation");
  const loginFailed = document.querySelector("#loginValidationFailed");

  try {
    const options = postData(userDetails);
    const result = await doFetch(`${authURL}login`, options);

    if (result.accessToken) {
      saveToStorage("accessToken", result.accessToken);
      saveToStorage("name", result.name);
      if (loginValidation) {
        showToast(loginValidation);
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      showToast(loginFailed);
    }
  } catch (error) {
    console.log(error);
  }
}
