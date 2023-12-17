/**
 * Fetches the values of the checked radio buttons in the "sortForm" form.
 * It then maps these elements to their values and returns an array of these values.
 * @returns {Array} An array of the values of the checked radio buttons.
 * @example
 * ```js
 * const sortFormValues = getSortFormValues();
 * ```
 */
export function getSortFormValues() {
  const sortForm = document.querySelector("#sortForm");
  const radioButtonValues = Array.from(sortForm.elements)
    .filter(({ type, checked }) => type === "radio" && checked)
    .map((key) => key.value);

  return radioButtonValues;
}
