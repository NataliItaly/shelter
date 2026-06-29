export default function listItem({ name, type, img }) {
  return `
    <li class="friends__item" aria-label="Open details">
      <img src="${img}" alt="${type} ${name}">
      <h3 class="friends__item-title">${name}</h3>
      <span class="btn btn_secondary">Learn more</span>
    </li>
  `;
}
