import { handleOnSearch } from "../handlers/handleOnSearch.js";
import { clearHTML } from "../components/clearHTML.js";

/**
 * Sets up event listeners for the search form.
 * It adds a submit event listener that prevents the default form submission.
 * It also adds an input event listener that shows the search container and handles the search if the input value length is at least 1, or clears the parent element and hides the search container otherwise.
 * @param {Array} listings - The listings to search through.
 * @param {HTMLElement} parentElement - The parent element to append the search results to.
 * @example
 * ```js
 * const listings = [{ id: 1, name: 'Listing 1' }, { id: 2, name: 'Listing 2' }];
 * const parentElement = document.querySelector("#listContainer");
 * setSearchListeners(listings, parentElement);
 * ```
 */
export function setSearchListeners(listings, parentElement) {
  const searchForm = document.querySelector("#searchForm");
  const searchContainer = document.querySelector("#searchContainer");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  searchForm.addEventListener("input", function (event) {
    if (event.target.value.length >= 1) {
      searchContainer.classList.remove("d-none");
      handleOnSearch(listings, event.target.value, parentElement);
    } else {
      clearHTML(parentElement);
      searchContainer.classList.add("d-none");
    }
  });
}
