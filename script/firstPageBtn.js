import { pagination } from './currentPageState.js';
import setCurrentPage from './setCurrentPage.js';
import petsList from './petsList.js';

export default function firstPageBtn(data) {
  const btn = document.getElementById('first-btn');
  btn.addEventListener('click', function () {
    pagination.currentPage = 1;
    setCurrentPage();
    btn.disabled = true;
    document.getElementById('prev-btn').disabled = true;
    document.getElementById('next-btn').disabled = false;
    document.getElementById('last-btn').disabled = false;
    petsList(data);
  });
}
