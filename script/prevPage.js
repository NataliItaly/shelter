import petsList from './petsList.js';
import setCurrentPage from './setCurrentPage.js';
import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';

export default function prevPage(data, itemsNumber) {
  const prevBtn = document.getElementById('prev-btn');
  const firstBtn = document.getElementById('first-btn');
  const lastBtn = document.getElementById('last-btn');

  prevBtn.addEventListener('click', function () {
    pagination.currentPage--;
    console.log('current', pagination.currentPage);

    petsList(data);
    setCurrentPage();

    if (pagination.currentPage <= 1) {
      prevBtn.disabled = true;
      firstBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
      firstBtn.disabled = false;
    }

    const nextBtn = document.getElementById('next-btn');
    if (itemsNumber / itemsPerPage() <= pagination.currentPage) {
      nextBtn.disabled = true;
      lastBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
      lastBtn.disabled = false;
    }
  });
}
