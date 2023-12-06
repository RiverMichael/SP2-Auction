import { renderListings } from "../components/render.js";
import { getListings } from "../utils/getListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

/**
 * Displays the newest listings.
 */
export async function displayNewListings() {
  const listingsNewContainer = document.querySelector("#listingsNew");

  try {
    const listings = await getListings(4);

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
