import { onCreateNewListingFormSubmit } from "../utils/onCreateNewListingFormSubmit.js";
import { createNewImageInput } from "../components/createHTML.js";

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
