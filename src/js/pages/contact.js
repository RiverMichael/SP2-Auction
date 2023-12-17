import { onContactFormSubmit } from "../utils/onContactFormSubmit.js";

/**
 * Initializes the contact page.
 * It adds an event listener to the contact form to handle the form submission.
 * It also adds an event listener to the "Clear Form" button to reset the form when clicked.
 * @example
 * ```js
 * displayContactPage();
 * ```
 */
function displayContactPage() {
  const contactForm = document.querySelector("#formContact");
  const clearContactFormButton = document.querySelector(
    "#clearContactFormButton",
  );
  contactForm.addEventListener("submit", onContactFormSubmit);
  clearContactFormButton.addEventListener("click", function () {
    contactForm.reset();
  });
}
displayContactPage();
