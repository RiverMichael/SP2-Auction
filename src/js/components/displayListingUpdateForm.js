/**
 * Displays the listing update form by removing the "visually-hidden" class from the form container.
 */
export function displayListingUpdateForm() {
  const listingUpdateForm = document.querySelector("#editListingContainer");
  listingUpdateForm.classList.remove("visually-hidden");
}
