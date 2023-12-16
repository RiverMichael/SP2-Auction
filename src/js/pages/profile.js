import { createProfileDetailsHTML } from "../components/createHTML.js";
import { displayLoggedInMenu } from "../components/displayLoggedInMenu.js";
import { getProfileDetails } from "../utils/getProfileDetails.js";
import { getProfileListings } from "../utils/getProfileListings.js";
import { getProfileBids } from "../utils/getProfileBids.js";
import { getProfileName } from "../utils/getProfileName.js";
import { clearHTML } from "../components/clearHTML.js";
import { checkIfProfileIsUsersProfile } from "../utils/checkifProfileIsUsersProfile.js";
import { renderListings, renderProfileBidCard } from "../components/render.js";
import { createMessage } from "../components/createMessage.js";
import { onChangeAvatarFormSubmit } from "../utils/onCreateNewAvatarFormSubmit.js";

export async function displayProfile() {
  try {
    const profileContainer = document.querySelector("#profileContainer");
    const profileListingsContainer = document.querySelector(
      "#profileListingsContainer",
    );
    const profileActiveBidsContainer = document.querySelector(
      "#profileActiveBidsContainer",
    );
    const profileName = getProfileName();
    const profileDetails = await getProfileDetails(profileName);
    const profileListings = await getProfileListings(profileName);
    const profileBids = await getProfileBids(profileName);
    const profileBidsDetails = profileBids.map(({ amount, listing }) => ({
      amount,
      listing,
      listingEndsAt: new Date(listing.endsAt),
    }));
    const todaysDate = new Date();
    const activeBidListings = profileBidsDetails.filter(
      ({ listingEndsAt }) => listingEndsAt > todaysDate,
    );

    document.title = `${profileName} | AuctionHub`;

    displayLoggedInMenu();
    clearHTML(profileContainer);
    createProfileDetailsHTML(profileDetails, profileContainer);
    checkIfProfileIsUsersProfile();

    const changeAvatarForm = document.querySelector("#changeAvatarForm");
    changeAvatarForm.addEventListener("submit", onChangeAvatarFormSubmit);

    clearHTML(profileListingsContainer);
    if (profileListings.length > 0) {
      renderListings(profileListings, profileListingsContainer);
    } else {
      createMessage(
        profileListingsContainer,
        ["my-3", "text-center", "fw-bold"],
        "You have no active listings.",
      );
    }

    clearHTML(profileActiveBidsContainer);
    if (activeBidListings.length > 0) {
      renderProfileBidCard(activeBidListings, profileActiveBidsContainer);
    } else {
      createMessage(
        profileActiveBidsContainer,
        ["my-3", "text-center", "fw-bold"],
        "You have no active bids.",
      );
    }
  } catch (error) {
    console.error(error);
  }
}
displayProfile();
