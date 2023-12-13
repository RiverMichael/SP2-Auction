export function displayImageModal(images, modalImage) {
  // const images = document.querySelectorAll(".details-image");
  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modalImage.alt = image.alt;

      const modal = new bootstrap.Modal(document.querySelector("#imageModal"));
      modal.show();
    });
  });
}
