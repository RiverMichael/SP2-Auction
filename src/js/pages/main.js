import { displayEndingListings } from "../components/displayEndingListings.js";
import { displayPopularListings } from "../components/displayPopularListings.js";
import { displayNewListings } from "../components/displayNewListings.js";

function main() {
  try {
    displayEndingListings();
    displayPopularListings();
    displayNewListings();
  } catch (error) {
    console.log(error);
  }
}
main();
