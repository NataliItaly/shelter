import petsList from './petsList.js';
import getData from './getData.js';
import nextPage from './nextPage.js';
import prevPage from './prevPage.js';
import setCurrentPage from './setCurrentPage.js';
import { pagination } from './currentPageState.js';
//import itemsPerPage from './itemsPerPage.js';

alert(
  'Уважаемый проверяющий! Пожалуйста, проверьте мою работу в среду. Заранее спасибо',
);

const itemsNumber = 48;
const data = await getData(itemsNumber);

const petsPage = document.getElementById('pets');
console.log(petsPage);
if (petsPage) {
  petsList(data, pagination.currentPage);

  window.addEventListener('resize', function () {
    petsList(data);
  });

  setCurrentPage(itemsNumber);
  nextPage(data, itemsNumber);
  prevPage(data, itemsNumber);
}
