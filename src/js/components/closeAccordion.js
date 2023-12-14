export function closeAccordion() {
  const accordionItem = document.querySelector(".accordion-collapse");

  if (accordionItem.classList.contains("show")) {
    const accordionButton = document.querySelector(
      '[data-bs-target="#edit-collapse"]',
    );
    accordionItem.classList.remove("show");
    accordionButton.setAttribute("aria-expanded", "false");
  }
}
