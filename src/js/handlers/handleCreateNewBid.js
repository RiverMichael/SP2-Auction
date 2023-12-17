import { bidsURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { postData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";
import { displayListingDetails } from "../pages/listing.js";

/**
 * Handles the creation of a new bid.
 * If the bid is successfully created, it shows a toast message, hides the bid modal, refreshes the listing details, and resets the bid form.
 * If the bid creation fails, it shows a different toast message.
 * @param {Object} bidDetails - The details of the new bid to be created.
 * @throws {Error} Will throw an error if the fetch operation fails.
 * @example
 * ```js
 * const bidDetails = { listingId: 1, amount: 100 };
 * handleCreateNewBid(bidDetails);
 * ```
 */
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
