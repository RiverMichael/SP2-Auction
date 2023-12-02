import { clearHTML } from "./clearHTML.js";
import { renderListings } from "../components/render.js";
import { createMessage } from "./createMessage.js";

export function displayFilteredListings(listings, parentElement) {
  if (listings.length) {
    clearHTML(parentElement);
    renderListings(listings, parentElement);
  } else {
    clearHTML(parentElement);
    createMessage(
      parentElement,
      ["my-3", "alert", "alert-warning", "text-center", "fw-bold"],
      "No listings found. Please try again.",
    );
  }
}
