const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export async function getProducts(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
        },
    });
    return response.json();
}