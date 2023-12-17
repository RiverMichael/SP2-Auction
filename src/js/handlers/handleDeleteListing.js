import { deleteListing } from "../api/fetch/deleteListing.js";

/**
 * Handles the deletion of a listing.
 * If the user confirms the deletion, it deletes the listing and then redirects to the listings page after 1 second.
 * @example
 * ```js
 * handleDeleteListing();
 * ```
 */
export function handleDeleteListing() {
  const userPrompt = window.confirm(
    "This action will DELETE this listing! Are you sure?",
  );

  if (userPrompt === true) {
    deleteListing();
    setTimeout(() => {
      window.location.href = "/listings/";
    }, 1000);
  }
}
