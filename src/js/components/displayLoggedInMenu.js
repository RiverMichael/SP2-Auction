import { checkIfLoggedIn } from "../utils/checkIfLoggedIn.js";
import { getProfileDetails } from "../utils/getProfileDetails.js";
import { getFromStorage } from "../utils/getFromStorage.js";

/**
 * Changes the navigation menu depending on if the user is logged in or not.
 */
export async function displayLoggedInMenu() {
  const loginRegisterButton = document.querySelector("#not-logged-in");
  const headerProfile = document.querySelector("#header-profile");
  const addListingButton = document.querySelector("#add-listing-button");
  const profileMenu = document.querySelector("#nav-profile");
  const creditsContainer = document.querySelector("#creditsHeaderContainer");
  const userName = getFromStorage("name");
  try {
    const isUserLoggedIn = checkIfLoggedIn();
    if (isUserLoggedIn) {
      const profileDetails = await getProfileDetails(userName);

      creditsContainer.innerText = profileDetails.credits;
      loginRegisterButton.classList.add("d-none");
      headerProfile.classList.remove("d-none");
      addListingButton.classList.remove("d-none");
      profileMenu.classList.remove("d-none");

      console.log("profileDetails", profileDetails);
    } else {
      loginRegisterButton.classList.remove("d-none");
      headerProfile.classList.add("d-none");
      addListingButton.classList.add("d-none");
      profileMenu.classList.add("d-none");
    }
  } catch (error) {
    console.log(error);
  }
}
displayLoggedInMenu();
