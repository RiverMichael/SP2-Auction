import { doFetch } from "../api/doFetch.js";
import { authURL } from "../api/constants.js";
import { postData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";

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

  try {
    console.log(userDetails);

    const options = postData(userDetails);
    const result = await doFetch(`${authURL}register`, options);
    console.log("result", result);

    if (result.id) {
      showToast(registrationValidation);
      setTimeout(() => {
        // Change to handleUserLogin
        window.location.href = "/";
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
}
