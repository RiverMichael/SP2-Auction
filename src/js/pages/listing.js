import { getListingDetails } from "../utils/getListingDetails.js";
import { renderListingDetails } from "../components/render.js";
import { displayLoggedInMenu } from "../components/displayLoggedInMenu.js";
import { clearHTML } from "../components/clearHTML.js";
import { checkIfListingSellerIsUser } from "../utils/checkIfListingSellerIsUser.js";
import { enableBidButton } from "../components/enableBidButton.js";
import { displayAllBids } from "../components/displayAllBids.js";
import { displayImageModal } from "../components/displayImageModal.js";
import { createBidFormModalHTML } from "../components/createHTML.js";
import { getUserCredits } from "../utils/getUserCredits.js";

async function displayListingDetails() {
  const listingContainer = document.querySelector("#listingDetailsContainer");
  const imageModal = document.querySelector("#modalImage");
  const bidModalTitleContainer = document.querySelector("#bidModalLabel");
  const bidModalDetailsContainer = document.querySelector("#bidDetails");

  try {
    const listing = await getListingDetails();
    const userCredits = await getUserCredits();

    console.log(listing);

    document.title = `${listing.title} | AuctionHub`;

    clearHTML(listingContainer);
    renderListingDetails(listing, listingContainer);
    displayLoggedInMenu();
    enableBidButton();
    displayAllBids();

    createBidFormModalHTML(
      listing,
      userCredits,
      bidModalTitleContainer,
      bidModalDetailsContainer,
    );
    checkIfListingSellerIsUser(listing);

    const detailImages = document.querySelectorAll(".details-image");
    displayImageModal(detailImages, imageModal);
  } catch (error) {
    console.log(error);
  }
}
displayListingDetails();
