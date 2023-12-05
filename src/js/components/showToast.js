/**
 * Shows a Bootstrap toast notification.
 * @param {HTMLElement} toast - The toast element to show.
 * @example
 * const toast = document.querySelector('.toast');
 * showToast(toast);
 */
export function showToast(toast) {
  new bootstrap.Toast(toast).show();
}
