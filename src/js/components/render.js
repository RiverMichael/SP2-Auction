import { createListingCardHTML } from "./createHTML.js";

export function renderListings(listings, parentElement) {
  listings.forEach((listing) => {
    createListingCardHTML(listing, parentElement);
  });
}
