export default async function getData(itemsNumber) {
  try {
    const response = await fetch('./assets/pets.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const totalData = [];
    for (let i = 0; i < itemsNumber / data.length; i++) {
      for (let y = 0; y < data.length; y++) {
        totalData.push(data[y]);
      }
    }
    return totalData;
  } catch (error) {
    console.error('Error:', error);
  }
}
