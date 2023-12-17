import { clearHTML } from "./clearHTML.js";
import { renderListings } from "../components/render.js";
import { createMessage } from "./createMessage.js";

/**
 * Displays the filtered listings or a message if no listings are found.
 * @param {Array} listings - The array of listings to display.
 * @param {HTMLElement} parentElement - The parent element to append the listings or message to.
 * @example
 * ```js
 * const listings = [
 *   { id: 1, title: "Listing 1" },
 *   { id: 2, title: "Listing 2" },
 * ];
 *
 * const parentElement = document.querySelector(".listings-container");
 * displayFilteredListings(listings, parentElement);
 * ```
 */
export function displayFilteredListings(listings, parentElement) {
  if (listings.length) {
    clearHTML(parentElement);
    renderListings(listings, parentElement);
  } else {
    clearHTML(parentElement);
    createMessage(
      parentElement,
      ["my-3", "alert", "alert-warning", "text-center", "fw-bold"],
      "No listings found. Please try again.",
    );
  }
}
