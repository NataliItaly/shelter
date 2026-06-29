import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';

export default function setCurrentPage(itemsNumber) {
  const pageEl = document.getElementById('page');

  /* if (itemsNumber / itemsPerPage() >= currentPage) {
    pageEl.textContent = itemsNumber / itemsPerPage();
  } */

  pageEl.textContent = pagination.currentPage;
}
