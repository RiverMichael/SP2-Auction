import { profilesURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { putData } from "../api/fetchOptions.js";
import { getProfileName } from "../utils/getProfileName.js";
import { showToast } from "../components/showToast.js";
import { displayProfile } from "../pages/profile.js";

/**
 * Handles the creation of a new avatar.
 * If the avatar is successfully updated, it shows a toast message and then hides the modal and refreshes the profile page after 1 second.
 * If the avatar update fails, it shows a different toast message.
 * @param {Object} avatar - The new avatar to be created.
 * @throws {Error} Will throw an error if the fetch operation fails.
 * @example
 * ```js
 * const avatar = { id: 1, url: "avatar.png" };
 * handleCreateNewAvatar(avatar);
 * ```
 */
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
