import { filterListingsOnSearch } from "./filterListingsOnSearch.js";
import { displayFilteredListings } from "../components/displayFilteredListings.js";

export function handleOnSearch(listings, term, parentElement) {
  const filteredListings = filterListingsOnSearch(listings, term);
  displayFilteredListings(filteredListings, parentElement);
}
