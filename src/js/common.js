import { bootstrapFormValidation } from "./components/bootstrapFormValidation.js";
import { handleLogOutUser } from "./utils/handleLogOutUser.js";
import { displayLoggedInMenu } from "./components/displayLoggedInMenu.js";

function common() {
  const cancelButton = document.querySelector(".cancelButton");
  if (cancelButton) {
    cancelButton.addEventListener("click", function () {
      history.back();
    });
  }

  displayLoggedInMenu();
  bootstrapFormValidation();
  handleLogOutUser();
}
common();
