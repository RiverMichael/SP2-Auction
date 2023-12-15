import {
  createListingCardHTML,
  createListingDetailsHTML,
  createProfileBidCardHTML,
} from "./createHTML.js";

/**
 * Renders an array of listings by creating HTML for each listing and appends it to a parent element.
 * @param {Array} listings - The array of listings to render.
 * @param {HTMLElement} parentElement - The parent element to append the listing cards to.
 */
export function renderListings(listings, parentElement) {
  listings.forEach((listing) => {
    createListingCardHTML(listing, parentElement);
  });
}

export function renderListingDetails(listing, parentElement) {
  createListingDetailsHTML(listing, parentElement);
}

export function renderProfileBidCard(bid, parentElement) {
  bid.forEach((bid) => {
    createProfileBidCardHTML(bid, parentElement);
  });
}
