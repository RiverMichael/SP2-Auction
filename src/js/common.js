import { bootstrapFormValidation } from "./components/bootstrapFormValidation.js";

function common() {
  const cancelButton = document.querySelector(".cancelButton");
  if (cancelButton) {
    cancelButton.addEventListener("click", function () {
      history.back();
    });
  }

  bootstrapFormValidation();
}
common();
