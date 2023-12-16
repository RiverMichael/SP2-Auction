import { handleUpdateListing } from "./handleUpdateListing.js";
import { showToast } from "../components/showToast.js";
import { displayListingDetails } from "../pages/listing.js";
import { closeAccordion } from "../components/closeAccordion.js";

export async function onUpdateListingFormSubmit(event) {
  event.preventDefault();
  const updateListingValidation = document.querySelector(
    "#updateListingValidation",
  );
  const updateListingValidationFailed = document.querySelector(
    "#updateListingValidationFailed",
  );

  try {
    const createUpdatedListing = await handleUpdateListing();

    if (createUpdatedListing) {
      showToast(updateListingValidation);
      setTimeout(() => {
        closeAccordion();
        displayListingDetails();
      }, 1000);
    } else {
      showToast(updateListingValidationFailed);
    }
  } catch (error) {
    console.log(error);
  }
}
