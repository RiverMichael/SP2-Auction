import { doFetch } from "../api/doFetch.js";
import { authURL } from "../api/constants.js";
import { saveToStorage } from "./saveToStorage.js";
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
  const loginFailed = document.querySelector("#loginFailed");

  try {
    const options = postData(userDetails);
    const result = await doFetch(`${authURL}login`, options);
    console.log(result);

    if (result.accessToken) {
      saveToStorage("accessToken", result.accessToken);
      saveToStorage("name", result.name);
      showToast(loginValidation);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      showToast(loginFailed);
    }
  } catch (error) {
    console.log(error);
  }
}
