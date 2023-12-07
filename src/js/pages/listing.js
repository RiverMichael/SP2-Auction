import { getListingDetails } from "../utils/getListingDetails.js";
import { renderListingDetails } from "../components/render.js";
import { displayLoggedInMenu } from "../components/displayLoggedInMenu.js";
import { clearHTML } from "../components/clearHTML.js";
import { checkIfListingSellerIsUser } from "../utils/checkIfListingSellerIsUser.js";
import { enableBidButton } from "../components/enableBidButton.js";

async function displayListingDetails() {
  const listingContainer = document.querySelector("#listingDetailsContainer");

  try {
    const listing = await getListingDetails();
    console.log(listing);

    document.title = `${listing.title} | AuctionHub`;

    clearHTML(listingContainer);
    renderListingDetails(listing, listingContainer);
    displayLoggedInMenu();
    enableBidButton();
    checkIfListingSellerIsUser(listing);
  } catch (error) {
    console.log(error);
  }
}
displayListingDetails();
