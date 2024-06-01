const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export async function postOrder(data) {
    const response = await fetch(`${BASE_URL}/order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
        },
        body: JSON.stringify(data),
    });
    return response.json();
}
