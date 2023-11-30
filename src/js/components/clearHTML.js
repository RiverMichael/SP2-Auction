/**
 * Clears the HTML content of a given parent element.
 * @param {HTMLElement} parentElement - The parent element to clear.
 * @example
 * ```js
 * const parentElement = document.querySelector('#postContainer')
 * clearHTML(parentElement)
 * ```
 */
export function clearHTML(parentElement) {
  parentElement.innerHTML = "";
}
