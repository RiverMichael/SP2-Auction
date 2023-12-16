/**
 * Displays the listing update form by removing the "visually-hidden" class from the form container.
 */
export function displayListingUpdateForm() {
  const listingUpdateForm = document.querySelector("#updateListingContainer");
  const listingUpdateFormButton = document.querySelector(
    "#updateListingButton",
  );
  listingUpdateForm.classList.remove("visually-hidden");
  listingUpdateFormButton.classList.remove("visually-hidden");
}
