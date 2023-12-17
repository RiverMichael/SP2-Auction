import { getListingDetails } from "../api/fetch/getListingDetails.js";
import { renderListingDetails } from "../components/render.js";
import { clearHTML } from "../components/clearHTML.js";
import { checkIfListingSellerIsUser } from "../utils/checkIfListingSellerIsUser.js";
import { enableBidButton } from "../components/enableBidButton.js";
import { displayAllBids } from "../components/displayAllBids.js";
import { displayImageModal } from "../components/displayImageModal.js";
import { createBidFormModalHTML } from "../components/createHTML.js";
import { getUserCredits } from "../api/fetch/getUserCredits.js";
import { createMessage } from "../components/createMessage.js";
import { onAddBidFormSubmit } from "../utils/onAddBidFormSubmit.js";
import { onUpdateListingFormSubmit } from "../utils/onUpdateListingFormSubmit.js";
import { handleDeleteListing } from "../handlers/handleDeleteListing.js";
import { displaySellerDetails } from "../components/displaySellerDetails.js";
import { checkIfLoggedIn } from "../utils/checkIfLoggedIn.js";

/**
 * Displays the details of a listing.
 * It fetches the listing details, clears the listing container, and then renders the listing details.
 * If the user is logged in, it fetches the user's credits, creates the bid form modal HTML, enables the bid button, displays all bids, displays the seller details, checks if the listing seller is the user, and adds event listeners to the "Add Bid" form, "Update Listing" form, and "Update Listing" button.
 * @example
 * ```js
 * displayListingDetails();
 * ```
 */
export async function displayListingDetails() {
  const listingContainer = document.querySelector("#listingDetailsContainer");
  const imageModal = document.querySelector("#modalImage");
  const bidModalTitleContainer = document.querySelector("#bidModalLabel");
  const bidModalDetailsContainer = document.querySelector("#bidDetails");

  try {
    const listing = await getListingDetails();
    const isUserLoggedIn = checkIfLoggedIn();

    document.title = `${listing.title} | AuctionHub`;

    clearHTML(listingContainer);
    renderListingDetails(listing, listingContainer);

    const detailImages = document.querySelectorAll(".details-image");
    displayImageModal(detailImages, imageModal);

    if (isUserLoggedIn) {
      const userCredits = await getUserCredits();

      createBidFormModalHTML(
        listing,
        userCredits,
        bidModalTitleContainer,
        bidModalDetailsContainer,
      );
      enableBidButton();
      displayAllBids();
      displaySellerDetails();
      checkIfListingSellerIsUser(listing);

      const createNewBidForm = document.querySelector("#addBidForm");
      createNewBidForm.addEventListener("submit", onAddBidFormSubmit);
      const updateListingForm = document.querySelector("#updateListingForm");
      updateListingForm.addEventListener("submit", onUpdateListingFormSubmit);
      const updateListingButton = document.querySelector(
        "#updateListingButton",
      );
      updateListingButton.addEventListener("click", () => {
        setTimeout(() => {
          updateListingForm.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 350);
      });
      const deleteListingButton = document.querySelector(
        "#deleteListingButton",
      );
      deleteListingButton.addEventListener("click", handleDeleteListing);
    }
  } catch (error) {
    console.log(error);
    clearHTML(listingContainer);
    createMessage(
      listingContainer,
      ["my-3", "alert", "alert-danger", "text-center", "fw-bold"],
      "Something went wrong. Please try again later.",
    );
  }
}
displayListingDetails();
