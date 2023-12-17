import { handleSortForm } from "../handlers/handleSortForm.js";

export function onSortFormSubmit(sortList, parentElement) {
  const sortForm = document.querySelector("#sortForm");
  sortForm.addEventListener("change", function (event) {
    event.preventDefault();
    handleSortForm(sortList, parentElement);
  });
}
