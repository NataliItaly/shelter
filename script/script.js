import petsList from './petsList.js';
import getData from './getData.js';
import nextPage from './nextPage.js';
import prevPage from './prevPage.js';
import setCurrentPage from './setCurrentPage.js';
//import itemsPerPage from './itemsPerPage.js';

const currentPage = 1;
const itemsNumber = 48;
const data = await getData(itemsNumber);

const petsPage = document.getElementById('pets');
console.log(petsPage);
if (petsPage) {
  petsList(data, currentPage);

  window.addEventListener('resize', function () {
    petsList(data, currentPage);
  });

  setCurrentPage(currentPage, itemsNumber);
  nextPage(data, currentPage, itemsNumber);
  prevPage(data, currentPage, itemsNumber);
}
