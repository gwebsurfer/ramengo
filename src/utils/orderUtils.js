import { postOrder } from '../services/postOrder.js';
import { removeItemsFromLocalStorage } from './localStorage.js';
import { updateHeader, updateMain } from './domUtils.js';
import { getActiveIdsFromLocalStorage } from './localStorage.js';
import { setOrderSuccess } from './state.js';

export function checkOrderButton() {
  const orderButton = document.querySelector('#order-button');
  const { activeBrothId, activeProteinId } = getActiveIdsFromLocalStorage();
  orderButton.disabled = !(activeBrothId && activeProteinId);
}

export async function handleOrder(body, orderButton) {
  const response = await postOrder(body);

  if (response) {
    removeItemsFromLocalStorage();
    setOrderSuccess(true);
    showSuccessPage(response, orderButton);
  }
}

function showSuccessPage(response, orderButton) {
  orderButton.innerHTML = 'Place new order';
  orderButton.classList.add('success');
  updateHeader(response);
  updateMain();
}
