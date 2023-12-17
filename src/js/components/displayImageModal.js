/**
 * Adds click event listeners to each image in the images array to display the image in a modal.
 * @param {HTMLImageElement[]} images - The array of images to add event listeners to.
 * @param {HTMLImageElement} modalImage - The image element in the modal where the clicked image will be displayed.
 * @example
 * ```js
 * const images = document.querySelectorAll(".image-class");
 * const modalImage = document.querySelector(".modal-image");
 * displayImageModal(images, modalImage);
 * ```
 */
export function displayImageModal(images, modalImage) {
  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modalImage.alt = image.alt;

      const modal = new bootstrap.Modal(document.querySelector("#imageModal"));
      modal.show();
    });
  });
}
