export default function burger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('burger_open');
      nav.classList.toggle('header__nav_open');
      document.body.classList.toggle('non-scroll');
    });
  }

  nav.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('header__menu-link') ||
      !e.target.closest('.header__menu')
    ) {
      burger.classList.remove('burger_open');
      nav.classList.remove('header__nav_open');
      document.body.classList.remove('non-scroll');
    }

    if (!e.target.closest('.header__menu')) {
    }
  });
}
