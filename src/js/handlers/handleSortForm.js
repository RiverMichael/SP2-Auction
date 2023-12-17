import { clearHTML } from "../components/clearHTML.js";
import { renderListings } from "../components/render.js";
import { getSortFormValues } from "../utils/getSortFormValues.js";
import { sortListings } from "../utils/sortListings.js";

/**
 * Handles the sorting of listings.
 * It gets the sort form values, sorts the listings based on these values, clears the parent element, and then renders the sorted listings.
 * @param {Array} listings - The array of listings to sort.
 * @param {HTMLElement} parentElement - The parent element to append the sorted listings to.
 * @example
 * ```js
 * const listings = [
 *   { id: 1, title: "Listing 1", price: 100 },
 *   { id: 2, title: "Listing 2", price: 200 },
 * ];
 * const parentElement = document.querySelector(".listings-container");
 * handleSortForm(listings, parentElement);
 * ```
 */
export function handleSortForm(listings, parentElement) {
  const termsToFilterBy = getSortFormValues();
  const sortedListings = sortListings(listings, termsToFilterBy);

  clearHTML(parentElement);
  renderListings(sortedListings, parentElement);
}
