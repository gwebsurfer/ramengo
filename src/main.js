import './styles/main.scss';
import { createSlider } from './slider.js';
import { brothsData, proteinsData } from './mockData.js';

document.addEventListener('DOMContentLoaded', () => {
  const { activeBrothId, activeProteinId } = getActiveIdsFromLocalStorage();
  createSlider('#broths', brothsData, checkOrderButton, activeBrothId);
  createSlider('#proteins', proteinsData, checkOrderButton, activeProteinId);
  checkOrderButton();
});

const orderButton = document.querySelector('#order-button');

function checkOrderButton() {
  const { activeBrothId, activeProteinId } = getActiveIdsFromLocalStorage();
  if (activeBrothId && activeProteinId) {
    orderButton.disabled = false;
  } else {
    orderButton.disabled = true;
  }
}

orderButton.addEventListener('click', async () => {
  const { activeBrothId, activeProteinId } = getActiveIdsFromLocalStorage();

  const body = {
    brothId: activeBrothId,
    proteinId: activeProteinId,
  };

  await postOrder(body);
  removeItemsFromLocalStorage();
});

async function postOrder(body) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Order submitted:', body);
}

function getActiveIdsFromLocalStorage() {
  return {
    activeBrothId: localStorage.getItem('brothsId'),
    activeProteinId: localStorage.getItem('proteinsId'),
  };
}

function removeItemsFromLocalStorage() {
  localStorage.removeItem('brothsId');
  localStorage.removeItem('proteinsId');
}
