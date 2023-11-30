/**
 * Creates a message container and appends it to the parent element.
 * @param {HTMLElement} parentElement - The parent element to append the message container to.
 * @param {string} messageType - The class to add the message (e.g. "error", "warning", "success").
 * @param {string} messageText - The text of the message.
 * @example
 * ```js
 * const postFeedContainer = document.querySelector('#feed');
 * createMessage(postFeedContainer, 'error', 'There was a problem while loading the feed')
 * ```
 */
export function createMessage(parentElement, messageType, messageText) {
  const message = document.createElement("div");
  message.classList.add(...messageType);
  message.innerText = messageText;

  parentElement.append(message);
}
