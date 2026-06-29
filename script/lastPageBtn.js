import { pagination } from './currentPageState.js';
import setCurrentPage from './setCurrentPage.js';
import petsList from './petsList.js';
import itemsPerPage from './itemsPerPage.js';

export default function lastPageBtn(data) {
  const btn = document.getElementById('last-btn');
  btn.addEventListener('click', function () {
    pagination.currentPage = data.length / itemsPerPage();
    setCurrentPage();
    btn.disabled = true;
    document.getElementById('next-btn').disabled = true;
    document.getElementById('prev-btn').disabled = false;
    document.getElementById('first-btn').disabled = false;

    petsList(data);
  });
}
