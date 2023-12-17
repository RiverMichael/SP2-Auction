import { getFromStorage } from "../../storage/getFromStorage.js";
import { getProfileDetails } from "./getProfileDetails.js";

export async function getUserCredits() {
  try {
    const user = getFromStorage("name");
    const profile = await getProfileDetails(user);

    return profile.credits;
  } catch (error) {
    console.log(error);
  }
}
