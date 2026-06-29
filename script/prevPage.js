import petsList from './petsList.js';
import setCurrentPage from './setCurrentPage.js';
import itemsPerPage from './itemsPerPage.js';

export default function prevPage(data, currentPage, itemsNumber) {
  const prevBtn = document.getElementById('prev-btn');
  console.log('current', currentPage);
  prevBtn.addEventListener('click', function () {
    currentPage--;
    console.log('current', currentPage);

    petsList(data, currentPage);
    setCurrentPage(currentPage);

    if (currentPage <= 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    const nextBtn = document.getElementById('next-btn');
    if (itemsNumber / itemsPerPage() <= currentPage) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  });
}
