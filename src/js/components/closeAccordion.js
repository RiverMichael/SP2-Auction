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
