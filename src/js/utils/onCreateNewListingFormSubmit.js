import { handleCreateNewListing } from "./handleCreateNewListing.js";
import { showToast } from "../components/showToast.js";

export async function onCreateNewListingFormSubmit(event) {
  event.preventDefault();
  const addListingValidation = document.querySelector("#addListingValidation");
  const addListingValidationFailed = document.querySelector(
    "#addListingValidationFailed",
  );

  try {
    const createNewListing = await handleCreateNewListing();

    if (createNewListing) {
      showToast(addListingValidation);
      setTimeout(() => {
        window.location.href = "/listings/";
      }, 2000);
    } else {
      showToast(addListingValidationFailed);
    }
  } catch (error) {
    console.log(error);
  }
}
