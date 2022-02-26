const BASE_URL = "https://www.google.com";

async function fetchItems() {
  try {
    const items = await fetch(`${BASE_URL}`);
    return items.json();
  } catch (error) {
    console.log(error);
  }
}

export { fetchItems };
