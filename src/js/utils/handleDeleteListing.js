import { deleteListing } from "./deleteListing.js";

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
