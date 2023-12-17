/**
 * Creates a new listing object from the values of the "formAddListing" form.
 * It creates a FormData object from the form, converts it to an object, and creates a new listing object from the form values.
 * It also converts the "endsAt" value to an ISO string and the "tags" value to an array of tags.
 * If the "media" value is not empty, it adds it to the new listing object as an array of media.
 * @returns {Object} An object with the new listing details.
 * @example
 * ```js
 * const newListing = createNewListing();
 * ```
 */
export function createNewListing() {
  const form = document.querySelector("#formAddListing");
  const formData = new FormData(form);
  const createListingObject = Object.fromEntries(formData.entries());
  const listingEndDate = new Date(createListingObject.endsAt);
  const mediaArray = formData.getAll("media");

  const newListing = {
    title: createListingObject.title,
    description: createListingObject.description,
    endsAt: listingEndDate.toISOString(),
    tags: createListingObject.tags
      .toLowerCase()
      .replace(/, /g, ",")
      .replace(/,/g, " ")
      .split(" ")
      .map((tag) => tag.trim()),
  };

  if (createListingObject.media !== "") {
    newListing.media = mediaArray;
  }

  return newListing;
}
