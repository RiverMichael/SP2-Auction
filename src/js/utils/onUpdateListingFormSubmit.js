import { handleUpdateListing } from "../handlers/handleUpdateListing.js";
import { createUpdatedListing } from "./createUpdatedListing.js";

export function onUpdateListingFormSubmit(event) {
  event.preventDefault();
  const listingDetails = createUpdatedListing();
  handleUpdateListing(listingDetails);
}
