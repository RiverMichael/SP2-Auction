import { handleContactForm } from "../handlers/handleContactForm.js";

/**
 * Handles the submit event of the contact form.
 * It prevents the default form submission and handles the contact form using the "handleContactForm" function.
 * @param {Event} event - The submit event.
 * @example
 * ```js
 * const contactForm = document.querySelector("#contactForm")
 * contactForm.addEventListener("submit", onContactFormSubmit);
 * ```
 */
export function onContactFormSubmit(event) {
  event.preventDefault();
  handleContactForm();
}
