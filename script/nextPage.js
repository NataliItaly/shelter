import petsList from './petsList.js';
import setCurrentPage from './setCurrentPage.js';
import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';

export default function nextPage(data, itemsNumber) {
  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', function () {
    pagination.currentPage++;
    petsList(data);
    setCurrentPage();

    if (itemsNumber / itemsPerPage() <= pagination.currentPage) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    const prevBtn = document.getElementById('prev-btn');
    if (pagination.currentPage <= 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
  });
}
