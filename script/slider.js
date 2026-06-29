import { sliderState } from './sliderState.js';
import sliderItem from './sliderItem.js';

export default function slider(data) {
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prev-slider-btn');
  const nextBtn = document.getElementById('next-slider-btn');
  const sliderList = document.getElementById('slider-list');

  data
    .slice(0, 8)
    .forEach((el) =>
      sliderList.insertAdjacentHTML('beforeend', sliderItem(el)),
    );

  const itemWidth = 270;
  const gap = parseInt(getComputedStyle(sliderList).gap);
  const step = itemWidth + gap;

  /* function updateSlider() {
    sliderList.style.transform = `translateX(-${sliderState.currentIndex * (itemWidth + gap)}px)`;
  } */

  let direction = null;
  let isAnimating = false;

  function moveNext() {
    if (isAnimating) return;

    isAnimating = true;
    direction = 'next';
    sliderList.style.transform = `translateX(-${step}px)`;
  }

  function movePrev() {
    if (isAnimating) return;

    isAnimating = true;
    direction = 'prev';
    sliderList.style.transform = `translateX(${step}px)`;
  }

  function handleTransitionEnd() {
    if (!isAnimating) return;
    sliderList.style.transition = 'none';
    sliderList.style.pointerEvents = 'none';

    if (direction === 'next') {
      sliderList.append(sliderList.firstElementChild);
    } else {
      sliderList.prepend(sliderList.lastElementChild);
    }

    sliderList.style.transform = 'translateX(0)';

    // Force browser to apply the styles
    sliderList.offsetHeight;

    sliderList.style.transition = 'transform 0.5s';

    requestAnimationFrame(() => {
      direction = null;
      isAnimating = false;
      sliderList.style.pointerEvents = 'auto';
    });
  }

  nextBtn.addEventListener('click', function () {
    moveNext();
  });

  prevBtn.addEventListener('click', function () {
    movePrev();
  });

  sliderList.addEventListener('transitionend', function () {
    handleTransitionEnd();
  });
}
