export default function createElement(tag, className, attributes) {
  const element = document.createElement(tag);
  element.classList.add(className);
  for (let key in attributes) {
    element.attributes[key] = key;
  }

  return element;
}
