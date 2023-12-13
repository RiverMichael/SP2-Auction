import { getListingDetails } from "../utils/getListingDetails.js";
import { renderListingDetails } from "../components/render.js";
import { displayLoggedInMenu } from "../components/displayLoggedInMenu.js";
import { clearHTML } from "../components/clearHTML.js";
import { checkIfListingSellerIsUser } from "../utils/checkIfListingSellerIsUser.js";
import { enableBidButton } from "../components/enableBidButton.js";
import { displayAllBids } from "../components/displayAllBids.js";
import { displayImageModal } from "../components/displayImageModal.js";

async function displayListingDetails() {
  const listingContainer = document.querySelector("#listingDetailsContainer");
  const imageModal = document.querySelector("#modalImage");

  try {
    const listing = await getListingDetails();
    console.log(listing);

    document.title = `${listing.title} | AuctionHub`;

    clearHTML(listingContainer);
    renderListingDetails(listing, listingContainer);
    displayLoggedInMenu();
    enableBidButton();
    displayAllBids();
    checkIfListingSellerIsUser(listing);

    const detailImages = document.querySelectorAll(".details-image");
    displayImageModal(detailImages, imageModal);
  } catch (error) {
    console.log(error);
  }
}
displayListingDetails();
