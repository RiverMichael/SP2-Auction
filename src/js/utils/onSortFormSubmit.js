import { handleSortForm } from "../handlers/handleSortForm.js";

/**
 * Adds a change event listener to the "sortForm" form.
 * When the form changes, it prevents the default form submission and handles the sort form using the "handleSortForm" function.
 * @param {Array} sortList - The list to sort.
 * @param {HTMLElement} parentElement - The parent element to append the sorted list to.
 * @example
 * ```js
 * const sortList = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
 * const parentElement = document.querySelector("#listContainer");
 * onSortFormSubmit(sortList, parentElement);
 * ```
 */
export function onSortFormSubmit(sortList, parentElement) {
  const sortForm = document.querySelector("#sortForm");
  sortForm.addEventListener("change", function (event) {
    event.preventDefault();
    handleSortForm(sortList, parentElement);
  });
}
