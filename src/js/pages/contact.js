import { onContactFormSubmit } from "../utils/onContactFormSubmit.js";

const contactForm = document.querySelector("#formContact");
const clearContactFormButton = document.querySelector(
  "#clearContactFormButton",
);
contactForm.addEventListener("submit", onContactFormSubmit);
clearContactFormButton.addEventListener("click", function () {
  contactForm.reset();
});
