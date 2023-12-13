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
