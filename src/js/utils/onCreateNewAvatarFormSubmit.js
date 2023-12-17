import { createNewAvatar } from "./createNewAvatar.js";
import { handleCreateNewAvatar } from "../handlers/handleCreateNewAvatar.js";

/**
 * Handles the submit event of the change avatar form.
 * It prevents the default form submission, creates a new avatar using the "createNewAvatar" function, and handles the creation of the new avatar using the "handleCreateNewAvatar" function.
 * @param {Event} event - The submit event.
 * @example
 * ```js
 * const changeAvatarForm = document.querySelector("#changeAvatarForm")
 * changeAvatarForm.addEventListener("submit", onChangeAvatarFormSubmit);
 * ```
 */
export function onChangeAvatarFormSubmit(event) {
  event.preventDefault();
  const avatar = createNewAvatar();
  handleCreateNewAvatar(avatar);
}
