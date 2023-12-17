import { createNewAvatar } from "./createNewAvatar.js";
import { handleCreateNewAvatar } from "../handlers/handleCreateNewAvatar.js";

export function onChangeAvatarFormSubmit(event) {
  event.preventDefault();
  const avatar = createNewAvatar();
  handleCreateNewAvatar(avatar);
}
