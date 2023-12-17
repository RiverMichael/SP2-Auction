import { showToast } from "../components/showToast.js";

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
