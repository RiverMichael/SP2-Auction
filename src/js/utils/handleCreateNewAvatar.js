import { profilesURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { putData } from "../api/fetchOptions.js";
import { getProfileName } from "./getProfileName.js";
import { showToast } from "../components/showToast.js";
import { displayProfile } from "../pages/profile.js";

export async function handleCreateNewAvatar(avatar) {
  const avatarUpdateValidation = document.querySelector(
    "#avatarUpdateValidation",
  );
  const avatarUpdateValidationFailed = document.querySelector(
    "#avatarUpdateValidationFailed",
  );
  const changeAvatarModalElement = document.querySelector("#changeAvatarModal");
  const changeAvatarModal = bootstrap.Modal.getInstance(
    changeAvatarModalElement,
  );
  try {
    const options = putData(avatar);
    const userName = getProfileName();
    const result = await doFetch(`${profilesURL}${userName}/media`, options);
    console.log(result);

    if (result.avatar !== undefined && result.avatar !== "") {
      showToast(avatarUpdateValidation);
      setTimeout(() => {
        changeAvatarModal?.hide();
        displayProfile();
      }, 1000);
    } else {
      showToast(avatarUpdateValidationFailed);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error updating avatar");
  }
}
