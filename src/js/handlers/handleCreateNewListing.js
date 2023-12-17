import { listingsURL } from "../api/constants.js";
import { doFetch } from "../api/doFetch.js";
import { postData } from "../api/fetchOptions.js";
import { showToast } from "../components/showToast.js";

/**
 * Handles the creation of a new listing.
 * If the listing is successfully created, it shows a toast message and then redirects to the listings page after 1 second.
 * If the listing creation fails, it shows a different toast message.
 * @param {Object} listingDetails - The details of the new listing to be created.
 * @throws {Error} Will throw an error if the fetch operation fails.
 * @example
 * ```js
 * const listingDetails = { title: "New Listing", description: "This is a new listing." };
 * handleCreateNewListing(listingDetails);
 * ```
 */
export async function handleCreateNewListing(listingDetails) {
  const addListingValidation = document.querySelector("#addListingValidation");
  const addListingValidationFailed = document.querySelector(
    "#addListingValidationFailed",
  );

  try {
    const options = postData(listingDetails);
    const result = await doFetch(listingsURL, options);

    if (result.id) {
      showToast(addListingValidation);
      setTimeout(() => {
        window.location.href = "/listings/";
      }, 1000);
    } else {
      showToast(addListingValidationFailed);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error adding listing");
  }
}
