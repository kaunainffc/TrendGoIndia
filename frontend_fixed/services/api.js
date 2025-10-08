const API_URL = "http://127.0.0.1:8000"; // Your backend

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
