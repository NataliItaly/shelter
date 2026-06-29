import listItem from './listItem.js';
import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';

export default async function petsList(data) {
  const petsListEl = document.getElementById('pets-list');
  petsListEl.innerHTML = '';

  const currentPage = pagination.currentPage;
  const itemsPerCurrentPage = itemsPerPage();

  const currentPageData = data.slice(
    (currentPage - 1) * itemsPerCurrentPage,
    itemsPerCurrentPage * currentPage,
  );
  console.log(currentPageData);
  const listItemsArr = currentPageData.map((el) => listItem(el));
  petsListEl.insertAdjacentHTML('afterbegin', listItemsArr.join(' '));
}
