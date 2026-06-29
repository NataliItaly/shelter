import petsList from './petsList.js';
import setCurrentPage from './setCurrentPage.js';
import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';

export default function prevPage(data, itemsNumber) {
  const prevBtn = document.getElementById('prev-btn');
  console.log('current', pagination.currentPage);
  prevBtn.addEventListener('click', function () {
    pagination.currentPage--;
    console.log('current', pagination.currentPage);

    petsList(data);
    setCurrentPage();

    if (pagination.currentPage <= 1) {
      //pagination.currentPage = 1;
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    const nextBtn = document.getElementById('next-btn');
    if (itemsNumber / itemsPerPage() <= pagination.currentPage) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  });
}
