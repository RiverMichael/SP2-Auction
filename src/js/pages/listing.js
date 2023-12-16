import { getListingDetails } from "../utils/getListingDetails.js";
import { renderListingDetails } from "../components/render.js";
import { clearHTML } from "../components/clearHTML.js";
import { checkIfListingSellerIsUser } from "../utils/checkIfListingSellerIsUser.js";
import { enableBidButton } from "../components/enableBidButton.js";
import { displayAllBids } from "../components/displayAllBids.js";
import { displayImageModal } from "../components/displayImageModal.js";
import { createBidFormModalHTML } from "../components/createHTML.js";
import { getUserCredits } from "../utils/getUserCredits.js";
import { createMessage } from "../components/createMessage.js";
import { onAddBidFormSubmit } from "../utils/onAddBidFormSubmit.js";
import { onUpdateListingFormSubmit } from "../utils/onUpdateListingFormSubmit.js";
import { handleDeleteListing } from "../utils/handleDeleteListing.js";

export async function displayListingDetails() {
  const listingContainer = document.querySelector("#listingDetailsContainer");
  const imageModal = document.querySelector("#modalImage");
  const bidModalTitleContainer = document.querySelector("#bidModalLabel");
  const bidModalDetailsContainer = document.querySelector("#bidDetails");

  try {
    const listing = await getListingDetails();
    const userCredits = await getUserCredits();

    document.title = `${listing.title} | AuctionHub`;

    clearHTML(listingContainer);
    renderListingDetails(listing, listingContainer);
    enableBidButton();
    checkIfListingSellerIsUser(listing);
    displayAllBids();
    createBidFormModalHTML(
      listing,
      userCredits,
      bidModalTitleContainer,
      bidModalDetailsContainer,
    );

    const createNewBidForm = document.querySelector("#addBidForm");
    createNewBidForm.addEventListener("submit", onAddBidFormSubmit);

    const updateListingForm = document.querySelector("#updateListingForm");
    updateListingForm.addEventListener("submit", onUpdateListingFormSubmit);

    const updateListingButton = document.querySelector("#updateListingButton");
    updateListingButton.addEventListener("click", () => {
      setTimeout(() => {
        updateListingForm.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 350);
    });

    const deleteListingButton = document.querySelector("#deleteListingButton");
    deleteListingButton.addEventListener("click", handleDeleteListing);

    const detailImages = document.querySelectorAll(".details-image");
    displayImageModal(detailImages, imageModal);
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
