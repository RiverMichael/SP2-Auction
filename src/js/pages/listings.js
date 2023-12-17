import { getListings } from "../api/fetch/getListings.js";
import { setSearchListeners } from "../utils/setSearchListeners.js";
import { renderListings } from "../components/render.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";
import { onSortFormSubmit } from "../utils/onSortFormSubmit.js";

async function displayListings() {
  const listingsFeedContainer = document.querySelector("#allListings");
  const searchContainer = document.querySelector("#displaySearch");

  try {
    const listings = await getListings();

    clearHTML(listingsFeedContainer);
    renderListings(listings, listingsFeedContainer);
    setSearchListeners(listings, searchContainer);
    onSortFormSubmit(listings, listingsFeedContainer);
  } catch (error) {
    console.log(error);
    clearHTML(listingsFeedContainer);
    createMessage(
      listingsFeedContainer,
      ["my-3", "alert", "alert-danger", "text-center", "fw-bold"],
      "Something went wrong. Please try again later.",
    );
  }
}
displayListings();
