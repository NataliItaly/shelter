import petsList from './petsList.js';
import setCurrentPage from './setCurrentPage.js';
import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';

export default function nextPage(data, itemsNumber) {
  const nextBtn = document.getElementById('next-btn');
  const lastBtn = document.getElementById('last-btn');
  const prevBtn = document.getElementById('prev-btn');
  const firstBtn = document.getElementById('first-btn');

  nextBtn.addEventListener('click', function () {
    pagination.currentPage++;
    petsList(data);
    setCurrentPage();

    if (itemsNumber / itemsPerPage() <= pagination.currentPage) {
      nextBtn.disabled = true;
      lastBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
      lastBtn.disabled = false;
    }

    if (pagination.currentPage <= 1) {
      prevBtn.disabled = true;
      firstBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
      firstBtn.disabled = false;
    }
  });
}
