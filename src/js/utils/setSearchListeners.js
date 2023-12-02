import { handleOnSearch } from "./handleOnSearch.js";
import { clearHTML } from "../components/clearHTML.js";

export function setSearchListeners(listings, parentElement) {
  const searchForm = document.querySelector("#searchForm");
  const searchContainer = document.querySelector("#searchContainer");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  searchForm.addEventListener("input", function (event) {
    if (event.target.value.length >= 1) {
      searchContainer.classList.remove("d-none");
      handleOnSearch(listings, event.target.value, parentElement);
    } else {
      clearHTML(parentElement);
      searchContainer.classList.add("d-none");
    }
  });
}
