import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';

export default function setCurrentPage(itemsNumber) {
  const pageEl = document.getElementById('page');

  pageEl.textContent = pagination.currentPage;
}
