import { renderListings } from "../components/render.js";
import { getListings } from "../api/fetch/getListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

/**
 * Displays the listings with the nearest end date and time.
 * @param {number} [numberOfListings=4] - The number of listings to display. Defaults to 4.
 * @example
 * ```js
 * displayEndingListings(5);
 * ```
 */
export async function displayEndingListings(numberOfListings = 4) {
  const listingsEndingContainer = document.querySelector("#listingsEnding");

  try {
    const listings = await getListings();
    const arrayToSort = [...listings];
    const listingsByEndDate = arrayToSort
      .sort((a, b) => new Date(a.endsAt) - new Date(b.endsAt))
      .slice(0, numberOfListings);

    clearHTML(listingsEndingContainer);
    renderListings(listingsByEndDate, listingsEndingContainer);
  } catch (error) {
    console.log(error);
    clearHTML(listingsEndingContainer);
    createMessage(
      listingsEndingContainer,
      ["my-3", "alert", "alert-danger", "text-center", "fw-bold"],
      "Something went wrong. Please try again later.",
    );
  }
}
