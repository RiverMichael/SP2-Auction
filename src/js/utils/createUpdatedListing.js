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
