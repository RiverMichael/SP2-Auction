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
