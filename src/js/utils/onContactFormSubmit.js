import { handleContactForm } from "./handleContactForm.js";

export function onContactFormSubmit(event) {
  event.preventDefault();
  handleContactForm();
}
