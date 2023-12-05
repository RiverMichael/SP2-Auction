/**
 * Initializes Bootstrap form validation on all forms with the "needs-validation" class.
 */
export function bootstrapFormValidation() {
  (() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false,
      );
    });
  })();
}
