import { renderListings } from "../components/render.js";
import { getListings } from "../utils/getListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

export async function displayPopularListings() {
  const listingsPopularContainer = document.querySelector("#listingsPopular");

  try {
    const allListings = await getListings();
    const arrayToSort = [...allListings];
    const listingsByPopular = arrayToSort
      .sort((a, b) => {
        const aBids = a.bids.length;
        const bBids = b.bids.length;
        return bBids - aBids;
      })
      .slice(0, 4);

    clearHTML(listingsPopularContainer);
    renderListings(listingsByPopular, listingsPopularContainer);
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
