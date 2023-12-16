export function createNewAvatar() {
  const form = document.querySelector("#changeAvatarForm");
  const formInputValue = form.changeAvatar.value;
  const newAvatarUrl = formInputValue;

  const newAvatar = {
    avatar: newAvatarUrl,
  };

  return newAvatar;
}
