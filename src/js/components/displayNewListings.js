import { renderListings } from "../components/render.js";
import { getListings } from "../utils/getListings.js";
import { clearHTML } from "../components/clearHTML.js";
import { createMessage } from "../components/createMessage.js";

export async function displayNewListings() {
  const listingsNewContainer = document.querySelector("#listingsNew");

  try {
    const allListings = await getListings();
    const arrayToSort = [...allListings];
    const listingsByNew = arrayToSort
      .sort((b, a) => {
        const aTime = new Date(a.created).getTime();
        const bTime = new Date(b.created).getTime();
        return aTime - bTime;
      })
      .slice(0, 4);

    clearHTML(listingsNewContainer);
    renderListings(listingsByNew, listingsNewContainer);
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
