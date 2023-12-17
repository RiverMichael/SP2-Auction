import { getFromStorage } from "../../storage/getFromStorage.js";
import { getProfileDetails } from "./getProfileDetails.js";

/**
 * Fetches the credits of the currently logged in user.
 * @returns {Promise<Number>} Returns a Promise that resolves to the number of credits the user has.
 * @throws Will throw an error if the retrieval process fails.
 * @example
 * ```js
 *  const userCredits = await getUserCredits();
 * ```
 */
export async function getUserCredits() {
  try {
    const user = getFromStorage("name");
    const profile = await getProfileDetails(user);

    return profile.credits;
  } catch (error) {
    console.log(error);
  }
}
