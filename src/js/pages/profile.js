import { createProfileDetailsHTML } from "../components/createHTML.js";
import { getProfileDetails } from "../api/fetch/getProfileDetails.js";
import { getProfileListings } from "../api/fetch/getProfileListings.js";
import { getProfileBids } from "../api/fetch/getProfileBids.js";
import { getProfileName } from "../utils/getProfileName.js";
import { clearHTML } from "../components/clearHTML.js";
import { checkIfProfileIsUsersProfile } from "../utils/checkifProfileIsUsersProfile.js";
import { renderListings, renderProfileBidCard } from "../components/render.js";
import { createMessage } from "../components/createMessage.js";
import { onChangeAvatarFormSubmit } from "../utils/onCreateNewAvatarFormSubmit.js";

/**
 * Fetches and displays the profile a user.
 * It fetches the profile details, listings, and active bids from the API, and then renders them.
 * @example
 * ```js
 * displayProfile();
 * ```
 */
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

    let activeBidListings = [];

    if (profileBids.length > 0) {
      const bidListings = profileBids.map(({ amount, listing }) => ({
        amount,
        listing,
        listingEndsAt: new Date(listing.endsAt),
      }));

      const todaysDate = new Date();

      activeBidListings = bidListings
        .filter(({ listingEndsAt }) => listingEndsAt > todaysDate)
        .sort((a, b) => a.listingEndsAt - b.listingEndsAt);
    }

    document.title = `${profileName} | AuctionHub`;

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
