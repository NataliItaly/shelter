import createElement from './createElement.js';

export default function petPopup({
  name,
  img,
  type,
  breed,
  description,
  age,
  inoculations,
  diseases,
  parasites,
}) {
  const popup = createElement('div', 'popup');
  const popupWindow = createElement('div', 'popup__window');
  const closeBtn = createElement('button', 'popup__close-btn');

  closeBtn.addEventListener('click', function (e) {
    e.target.closest('.popup').remove();
    document.body.classList.remove('non-scroll');
  });

  popup.addEventListener('click', function (e) {
    if (
      !e.target.closest('.popup__window') &&
      !e.target.closest('.popup__close-btn')
    ) {
      popup.remove();
      document.body.classList.remove('non-scroll');
    }
  });

  const popupCard = `
    <div class='popup__card'>
      <img class="popup__img" src='${img}' alt='${type} ${name}' />
      <div class='popup__content'>
        <h3 class='popup__title'>${name}</h3>
        <p class='popup__subtitle'>${type} - ${breed}</p>
        <div class='popup__description'>${description}</div>
        <ul class='popup__info-list'>
          <li class='popup__info-item'>
            <strong class='popup__info-data'>Age:</strong>
            <span class='popup__info-details'>${age}</span>
          </li>
          <li class='popup__info-item'>
            <strong class='popup__info-data'>Inoculations:</strong>
            <span class='popup__info-details'>${inoculations}</span>
          </li>
          <li class='popup__info-item'>
            <strong class='popup__info-data'>Diseases:</strong>
            <span class='popup__info-details'>${diseases}</span>
          </li>
          <li class='popup__info-item'>
            <strong class='popup__info-data'>Parasites:</strong>
            <span class='popup__info-details'>${parasites}</span>
          </li>
        </ul>
      </div>
    </div>
  `;

  popupWindow.append(closeBtn);
  popupWindow.insertAdjacentHTML('beforeend', popupCard);
  popup.append(popupWindow);

  return popup;
}
