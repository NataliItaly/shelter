import petsList from './petsList.js';
import getData from './getData.js';
import nextPage from './nextPage.js';
import prevPage from './prevPage.js';
import setCurrentPage from './setCurrentPage.js';
import { pagination } from './currentPageState.js';
//import itemsPerPage from './itemsPerPage.js';
import firstPageBtn from './firstPageBtn.js';
import lastPageBtn from './lastPageBtn.js';
import slider from './slider.js';

/* alert(
  'Уважаемый проверяющий! Пожалуйста, проверьте мою работу в среду. Заранее спасибо',
); */

const itemsNumber = 48;
const data = await getData(itemsNumber);

const homePage = document.getElementById('home-page');
if (homePage) {
  slider(data);

  window.addEventListener('resize', function () {
    slider();
  });
}

const petsPage = document.getElementById('pets');
if (petsPage) {
  petsList(data, pagination.currentPage);

  window.addEventListener('resize', function () {
    petsList(data);
  });

  setCurrentPage(itemsNumber);
  nextPage(data, itemsNumber);
  prevPage(data, itemsNumber);
  firstPageBtn(data);
  lastPageBtn(data);
}
