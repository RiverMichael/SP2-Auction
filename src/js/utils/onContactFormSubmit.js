import { handleContactForm } from "../handlers/handleContactForm.js";

export function onContactFormSubmit(event) {
  event.preventDefault();
  handleContactForm();
}
