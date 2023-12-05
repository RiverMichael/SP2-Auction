import { bootstrapFormValidation } from "./components/bootstrapFormValidation.js";

function common() {
  try {
    const cancelButton = document.querySelector(".cancelButton");
    cancelButton.addEventListener("click", function () {
      history.back();
    });

    bootstrapFormValidation();
  } catch (error) {
    console.error(error);
  }
}
common();
