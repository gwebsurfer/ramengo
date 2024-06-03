import { showToast } from '../components/toast/toast';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export async function getProducts(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    showToast(
      `Failed to retrieve the list of ${endpoint}. Please try again.`,
      'error'
    );
  }
}
