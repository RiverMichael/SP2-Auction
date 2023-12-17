export function getSortFormValues() {
  const sortForm = document.querySelector("#sortForm");
  const radioButtonValues = Array.from(sortForm.elements)
    .filter(({ type, checked }) => type === "radio" && checked)
    .map((key) => key.value);

  return radioButtonValues;
}
