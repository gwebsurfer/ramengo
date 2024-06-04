import './styles/main.scss';

import { getProducts } from './services/getProducts.js';
import { getActiveIdsFromLocalStorage } from './utils/localStorage.js';
import { createSlider } from './components/slider/slider.js';
import { checkOrderButton, handleOrder } from './utils/orderUtils.js';
import { getOrderSuccess } from './utils/state.js';
import { scrollTo } from './utils/helpers.js';
import { showToast } from './components/toast/toast.js';

async function initialize() {
  try {
    const brothsData = await getProducts('broths');
    const proteinsData = await getProducts('proteins');

    if (brothsData && proteinsData) {
      const { activeBrothId, activeProteinId } = getActiveIdsFromLocalStorage();

      createSlider('#broths', brothsData, checkOrderButton, activeBrothId);
      createSlider(
        '#proteins',
        proteinsData,
        checkOrderButton,
        activeProteinId
      );
      checkOrderButton();
    } else {
      showToast('Error loading list of ingredients.', 'error');
    }
  } catch (error) {
    showToast('Error initializing sliders. Please try again.', 'error');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initialize();
});

document
  .getElementById('order-now-button')
  .addEventListener('click', () => scrollTo('main'));

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
