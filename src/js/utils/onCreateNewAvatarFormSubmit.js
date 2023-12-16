import { createNewAvatar } from "./createNewAvatar.js";
import { handleCreateNewAvatar } from "./handleCreateNewAvatar.js";

export function onChangeAvatarFormSubmit(event) {
  event.preventDefault();
  const avatar = createNewAvatar();
  handleCreateNewAvatar(avatar);
}
