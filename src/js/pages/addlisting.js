import { onCreateNewListingFormSubmit } from "../utils/onCreateNewListingFormSubmit.js";
import { createNewImageInput } from "../components/createHTML.js";

/**
 * Initializes the add listing form.
 * It adds an event listener to the "Add Image" button to create a new image input when clicked.
 * It also adds an event listener to the form to handle the form submission.
 * @example
 * ```js
 * addListing();
 * ```
 */
async function addListing() {
  const addListingForm = document.querySelector("#formAddListing");
  const addImagesContainer = document.querySelector("#addImagesContainer");
  const addListingImageButton = document.querySelector(
    "#addListingImageButton",
  );
  try {
    addListingImageButton.addEventListener("click", () =>
      createNewImageInput(addImagesContainer),
    );
    addListingForm.addEventListener("submit", onCreateNewListingFormSubmit);
  } catch (error) {
    console.log(error);
  }
}
addListing();
