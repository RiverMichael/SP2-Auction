import { bidsURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { postData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";
import { displayListingDetails } from "../pages/listing.js";

export async function handleCreateNewBid(bidDetails) {
  const addBidValidation = document.querySelector("#addBidValidation");
  const addBidValidationFailed = document.querySelector(
    "#addBidValidationFailed",
  );
  const addBidForm = document.querySelector("#addBidForm");
  const bidModalElement = document.querySelector("#bidModal");
  const bidModal = bootstrap.Modal.getInstance(bidModalElement);

  try {
    const options = postData(bidDetails);
    const result = await doFetch(bidsURL, options);

    if (result.id) {
      showToast(addBidValidation);
      setTimeout(() => {
        bidModal?.hide();
        displayListingDetails();
      }, 1000);
      addBidForm.reset();
    } else {
      showToast(addBidValidationFailed);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error adding bid");
  }
}
