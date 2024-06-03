import './styles/main.scss';

import { brothsData, proteinsData } from './mockData.js';

import { getActiveIdsFromLocalStorage } from './utils/localStorage.js';
import { createSlider } from './components/slider/slider.js';
import { checkOrderButton, handleOrder } from './utils/orderUtils.js';
import { getOrderSuccess } from './utils/state.js';
import { getProducts } from './services/getProducts.js';

//const brothsData = getProducts('broths');
//const proteinsData = getProducts('proteins');

document.addEventListener('DOMContentLoaded', () => {
  const { activeBrothId, activeProteinId } = getActiveIdsFromLocalStorage();
  createSlider('#broths', brothsData, checkOrderButton, activeBrothId);
  createSlider('#proteins', proteinsData, checkOrderButton, activeProteinId);
  checkOrderButton();
});

const orderButton = document.querySelector('#order-button');
orderButton.addEventListener('click', async () => {
  const { activeBrothId, activeProteinId } = getActiveIdsFromLocalStorage();

  const body = {
    brothId: activeBrothId,
    proteinId: activeProteinId,
  };

  if (getOrderSuccess()) {
    window.location.reload();
  } else {
    await handleOrder(body, orderButton);
  }
});
