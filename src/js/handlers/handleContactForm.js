import { showToast } from "../components/showToast.js";

/**
 * Handles the contact form submission.
 * If the form is valid, it shows a toast message and then redirects to the home page after 3 seconds.
 * @example
 * ```js
 * handleContactForm();
 * ```
 */
export function handleContactForm() {
  const contactForm = document.querySelector("#formContact");
  const contactValidation = document.querySelector("#contactValidation");

  if (contactForm.checkValidity()) {
    showToast(contactValidation);
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }
}
