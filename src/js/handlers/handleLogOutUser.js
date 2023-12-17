import { logOutUser } from "../utils/logOutUser.js";

export function handleLogOutUser() {
  const logOutButtons = document.querySelectorAll(".button-logout");
  logOutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      logOutUser();
    });
  });
}
