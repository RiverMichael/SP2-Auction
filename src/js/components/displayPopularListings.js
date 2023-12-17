import { renderListings } from "../components/render.js";
import { getListings } from "../api/fetch/getListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

/**
 * Displays the listings with the most bids.
 * @param {Number} numberOfListings - The number of listings to display. Defaults to 4.
 * @example
 * ```js
 * displayPopularListings(5);
 * ```
 */
export async function displayPopularListings(numberOfListings = 4) {
  const listingsPopularContainer = document.querySelector("#listingsPopular");

  try {
    const listings = await getListings();
    const arrayToSort = [...listings];
    const listingsByNumberOfBids = arrayToSort
      .sort((a, b) => b.bids.length - a.bids.length)
      .slice(0, numberOfListings);

    clearHTML(listingsPopularContainer);
    renderListings(listingsByNumberOfBids, listingsPopularContainer);
  } catch (error) {
    console.log(error);
    clearHTML(listingsPopularContainer);
    createMessage(
      listingsPopularContainer,
      ["my-3", "alert", "alert-danger", "text-center", "fw-bold"],
      "Something went wrong. Please try again later.",
    );
  }
}
