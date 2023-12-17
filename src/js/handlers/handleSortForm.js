import { clearHTML } from "../components/clearHTML.js";
import { renderListings } from "../components/render.js";
import { getSortFormValues } from "../utils/getSortFormValues.js";
import { sortListings } from "../utils/sortListings.js";

export function handleSortForm(listings, parentElement) {
  const termsToFilterBy = getSortFormValues();
  const sortedListings = sortListings(listings, termsToFilterBy);

  clearHTML(parentElement);
  renderListings(sortedListings, parentElement);
}
