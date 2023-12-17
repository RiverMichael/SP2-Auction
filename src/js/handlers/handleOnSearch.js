import { filterListingsOnSearch } from "../utils/filterListingsOnSearch.js";
import { displayFilteredListings } from "../components/displayFilteredListings.js";

/**
 * Handles the search operation on listings.
 * It filters the listings based on the search term and then displays the filtered listings.
 * @param {Array} listings - The array of listings to search in.
 * @param {string} term - The search term.
 * @param {HTMLElement} parentElement - The parent element to append the filtered listings to.
 * @example
 * ```js
 * const listings = [
 *   { id: 1, title: "Listing 1" },
 *   { id: 2, title: "Listing 2" },
 * ];
 * const term = "1";
 * const parentElement = document.querySelector(".listings-container");
 * handleOnSearch(listings, term, parentElement);
 * ```
 */
export function handleOnSearch(listings, term, parentElement) {
  const filteredListings = filterListingsOnSearch(listings, term);
  displayFilteredListings(filteredListings, parentElement);
}
