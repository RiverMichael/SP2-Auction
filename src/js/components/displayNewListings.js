import { renderListings } from "../components/render.js";
import { getListings } from "../api/fetch/getListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

/**
 * Displays the newest listings.
 * @param {Number} numberOfListings - The number of listings to display. Defaults to 4.
 * @example
 * ```js
 * displayNewListings(5);
 * ```
 */
export async function displayNewListings(numberOfListings = 4) {
  const listingsNewContainer = document.querySelector("#listingsNew");

  try {
    const listings = await getListings(numberOfListings);

    clearHTML(listingsNewContainer);
    renderListings(listings, listingsNewContainer);
  } catch (error) {
    console.log(error);
    clearHTML(listingsNewContainer);
    createMessage(
      listingsNewContainer,
      ["my-3", "alert", "alert-danger", "text-center", "fw-bold"],
      "Something went wrong. Please try again later.",
    );
  }
}
