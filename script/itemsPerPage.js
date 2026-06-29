export default function itemsPerPage() {
  let itemsPerPage = 8;
  if (window.innerWidth <= 580) {
    itemsPerPage = 3;
  } else if (window.innerWidth <= 1180) {
    itemsPerPage = 6;
  }

  return itemsPerPage;
}
