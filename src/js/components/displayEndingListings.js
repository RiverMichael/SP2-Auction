import { renderListings } from "../components/render.js";
import { getEndingListings } from "../utils/getEndingListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

/**
 * Displays the listings that are ending soon.
 */
export async function displayEndingListings() {
  const listingsEndingContainer = document.querySelector("#listingsEnding");

  try {
    const listings = await getEndingListings(4);

    clearHTML(listingsEndingContainer);
    renderListings(listings, listingsEndingContainer);
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
