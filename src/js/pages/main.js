import { displayEndingListings } from "../components/displayEndingListings.js";
import { displayPopularListings } from "../components/displayPopularListings.js";
import { displayNewListings } from "../components/displayNewListings.js";
import { setSearchListeners } from "../utils/setSearchListeners.js";
import { getListings } from "../api/fetch/getListings.js";

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
