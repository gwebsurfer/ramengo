import { showToast } from '../components/toast/toast.js';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export async function postOrder(data) {
  try {
    const response = await fetch(`${BASE_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    //showToast('Order successfully placed', 'success');

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    showToast('Failed to place order. Please try again.', 'error');
  }
}
