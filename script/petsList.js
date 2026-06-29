import listItem from './listItem.js';
import itemsPerPage from './itemsPerPage.js';
import { pagination } from './currentPageState.js';
import petPopup from './petPopup.js';

export default async function petsList(data) {
  const petsListEl = document.getElementById('pets-list');
  petsListEl.innerHTML = '';

  petsListEl.addEventListener('click', function (e) {
    if (e.target.closest('.friends__item')) {
      const currentPet = data.find(
        (el) => el.name === e.target.closest('.friends__item').id,
      );
      console.log(currentPet);
      const popup = petPopup(currentPet);
      document.body.append(popup);
      document.body.classList.add('non-scroll');
    }
  });

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
