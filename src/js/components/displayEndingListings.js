import { renderListings } from "../components/render.js";
import { getListings } from "../utils/getListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

/**
 * Displays the listings that are ending soon.
 * @param {Number} numberOfListings - The number of listings to display. Defaults to 4.
 */
export async function displayEndingListings(numberOfListings = 4) {
  const listingsEndingContainer = document.querySelector("#listingsEnding");

  try {
    const allListings = await getListings();
    const arrayToSort = [...allListings];
    const listingsByEnding = arrayToSort
      .sort((a, b) => {
        const aTime = new Date(a.endsAt).getTime();
        const bTime = new Date(b.endsAt).getTime();
        return aTime - bTime;
      })
      .slice(0, numberOfListings);

    clearHTML(listingsEndingContainer);
    renderListings(listingsByEnding, listingsEndingContainer);
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
