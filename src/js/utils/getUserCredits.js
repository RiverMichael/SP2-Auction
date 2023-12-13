import { getFromStorage } from "./getFromStorage.js";
import { getProfileDetails } from "./getProfileDetails.js";

export async function getUserCredits() {
  const user = getFromStorage("name");
  const profile = await getProfileDetails(user);

  return profile.credits;
}
