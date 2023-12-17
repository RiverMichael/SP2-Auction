import { handleCreateNewListing } from "./handleCreateNewListing.js";
import { createNewListing } from "./createNewListing.js";

export function onCreateNewListingFormSubmit(event) {
  event.preventDefault();
  const listingDetails = createNewListing();
  handleCreateNewListing(listingDetails);
}
