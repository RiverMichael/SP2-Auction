import { displayLoggedInMenu } from "../components/displayLoggedInMenu.js";
import { getListings } from "../utils/getListings.js";
import { setSearchListeners } from "../utils/setSearchListeners.js";
import { renderListings } from "../components/render.js";
import { clearHTML } from "../components/clearHTML.js";

async function listings() {
  const listingsFeedContainer = document.querySelector("#allListings");
  const searchContainer = document.querySelector("#displaySearch");
  try {
    const allListings = await getListings();
    console.log(allListings);

    clearHTML(listingsFeedContainer);
    renderListings(allListings, listingsFeedContainer);
    setSearchListeners(allListings, searchContainer);
    displayLoggedInMenu();
  } catch (error) {
    console.log(error);
  }
}
listings();
