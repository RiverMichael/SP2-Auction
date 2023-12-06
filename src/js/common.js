import { bootstrapFormValidation } from "./components/bootstrapFormValidation.js";
import { handleLogOutUser } from "./utils/handleLogOutUser.js";

function common() {
  const cancelButton = document.querySelector(".cancelButton");
  if (cancelButton) {
    cancelButton.addEventListener("click", function () {
      history.back();
    });
  }

  bootstrapFormValidation();
  handleLogOutUser();
}
common();
