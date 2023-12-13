import { handleCreateNewBid } from "./handleCreateNewBid.js";
import { showToast } from "../components/showToast.js";
import { displayListingDetails } from "../pages/listing.js";

export async function onAddBidFormSubmit(event) {
  event.preventDefault();
  const addBidValidation = document.querySelector("#addBidValidation");
  const addBidValidationFailed = document.querySelector(
    "#addBidValidationFailed",
  );
  const addBidForm = document.querySelector("#addBidForm");
  const bidModalElement = document.querySelector("#bidModal");
  const bidModal = bootstrap.Modal.getInstance(bidModalElement);
  try {
    const addBid = await handleCreateNewBid();

    if (addBid) {
      addBidForm.reset();
      showToast(addBidValidation);
      setTimeout(() => {
        bidModal?.hide();
        displayListingDetails();
      }, 2000);
    } else {
      showToast(addBidValidationFailed);
    }
  } catch (error) {
    console.log(error);
  }
}
