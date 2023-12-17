/**
 * Closes the accordion item with the id 'update-collapse' if it is currently open.
 * Also updates the 'aria-expanded' attribute of the corresponding button.
 * @example
 * ```js
 * closeAccordion();
 * ```
 */
export function closeAccordion() {
  const accordionItem = document.querySelector("#update-collapse");
  const accordionButton = document.querySelector(
    '[data-bs-target="#update-collapse"]',
  );

  if (accordionItem.classList.contains("show")) {
    accordionItem.classList.remove("show");
    accordionButton.setAttribute("aria-expanded", "false");
  }
}
