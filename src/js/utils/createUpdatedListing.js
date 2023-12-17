/**
 * Creates an updated listing object from the values of the "updateListingForm" form.
 * It creates a FormData object from the form, converts it to an object, and creates a new listing object from the form values.
 * It also converts the "tags" value to an array of tags.
 * If the "media" value is not empty, it adds it to the new listing object as an array of media.
 * @returns {Object} An object with the updated listing details.
 * @example
 * ```js
 * const updatedListing = createUpdatedListing();
 * ```
 */
export function createUpdatedListing() {
  const form = document.querySelector("#updateListingForm");
  const formData = new FormData(form);
  const updatedListingObject = Object.fromEntries(formData.entries());
  const mediaArray = formData.getAll("media");

  const updatedListing = {};

  if (updatedListingObject.title) {
    updatedListing.title = updatedListingObject.title;
  }

  if (updatedListingObject.description) {
    updatedListing.description = updatedListingObject.description;
  }

  if (updatedListingObject.tags) {
    updatedListing.tags = updatedListingObject.tags
      .toLowerCase()
      .replace(/, /g, ",")
      .replace(/,/g, " ")
      .split(" ")
      .map((tag) => tag.trim());
  }

  if (updatedListingObject.media !== "") {
    updatedListing.media = mediaArray;
  }

  console.log(updatedListing);

  return updatedListing;
}
