import itemsPerPage from './itemsPerPage.js';

export default function setCurrentPage(currentPage, itemsNumber) {
  const pageEl = document.getElementById('page');

  if (itemsNumber / itemsPerPage() >= currentPage) {
    pageEl.textContent = itemsNumber / itemsPerPage();
  }

  pageEl.textContent = currentPage;
}
