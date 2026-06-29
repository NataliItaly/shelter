import petsList from './petsList.js';
import setCurrentPage from './setCurrentPage.js';
import itemsPerPage from './itemsPerPage.js';

export default function nextPage(data, currentPage, itemsNumber) {
  const nextBtn = document.getElementById('next-btn');

  nextBtn.addEventListener('click', function () {
    currentPage++;
    petsList(data, currentPage);
    setCurrentPage(currentPage);

    if (itemsNumber / itemsPerPage() <= currentPage) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    const prevBtn = document.getElementById('prev-btn');
    if (currentPage <= 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
  });
}
