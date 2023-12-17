/**
 * Creates a new avatar object from the value of the "changeAvatar" input field in the "changeAvatarForm" form.
 * @returns {Object} An object with the new avatar URL.
 * @example
 * ```js
 * const newAvatar = createNewAvatar();
 * ```
 */
export function createNewAvatar() {
  const form = document.querySelector("#changeAvatarForm");
  const formInputValue = form.changeAvatar.value;
  const newAvatarUrl = formInputValue;

  const newAvatar = {
    avatar: newAvatarUrl,
  };

  return newAvatar;
}
