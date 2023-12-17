import { displayEndingListings } from "../components/displayEndingListings.js";
import { displayPopularListings } from "../components/displayPopularListings.js";
import { displayNewListings } from "../components/displayNewListings.js";
import { setSearchListeners } from "../utils/setSearchListeners.js";
import { getListings } from "../api/fetch/getListings.js";

/**
 * The main function of the application.
 * It fetches all listings, selects the search display container, and initializes the display of ending, popular, and new listings, as well as the search listeners.
 * @example
 * ```js
 * main();
 * ```
 */
async function main() {
  try {
    const listings = await getListings();
    const displaySearchContainer = document.querySelector("#displaySearch");

    displayEndingListings();
    displayPopularListings();
    displayNewListings();
    setSearchListeners(listings, displaySearchContainer);
  } catch (error) {
    console.log(error);
  }
}
main();
