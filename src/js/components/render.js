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

/**
 * Renders the details of a listing by creating HTML for the listing and appends it to a parent element.
 * @param {Object} listing - The listing to render.
 * @param {HTMLElement} parentElement - The parent element to append the listing details to.
 * @example
 * ```js
 * const listing = { id: 1, title: "Listing 1" };
 * const parentElement = document.querySelector(".listing-details-container");
 * renderListingDetails(listing, parentElement);
 * ```
 */
export function renderListingDetails(listing, parentElement) {
  createListingDetailsHTML(listing, parentElement);
}

/**
 * Renders an array of bids by creating HTML for each bid and appends it to a parent element.
 * @param {Array} bids - The array of bids to render.
 * @param {HTMLElement} parentElement - The parent element to append the bid cards to.
 * @example
 * ```js
 * const bids = [
 *   { id: 1, amount: 100 },
 *   { id: 2, amount: 200 },
 * ];
 * const parentElement = document.querySelector(".bids-container");
 * renderProfileBidCard(bids, parentElement);
 * ```
 */
export function renderProfileBidCard(bid, parentElement) {
  bid.forEach((bid) => {
    createProfileBidCardHTML(bid, parentElement);
  });
}
