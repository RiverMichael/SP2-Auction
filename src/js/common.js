import { bootstrapFormValidation } from "./components/bootstrapFormValidation.js";
import { handleLogOutUser } from "./handlers/handleLogOutUser.js";
import { displayLoggedInMenu } from "./components/displayLoggedInMenu.js";

/**
 * Sets up common functionality for all pages.
 * It adds an event listener to the "Cancel" button to go back to the previous page when clicked.
 * It also displays the logged-in menu, initializes the form validation, and sets up the logout user handler.
 * @example
 * ```js
 * common();
 * ```
 */
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
