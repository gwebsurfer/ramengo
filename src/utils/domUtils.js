import ramenLogo from '../assets/logo/ramen-go-logo-2.svg';
import bowing from '../assets/bowing.svg';

export function updateHeader(response) {
  const header = document.getElementById('header');
  header.classList.remove('default-header');
  header.classList.add('success-header');

  header.innerHTML = `
    <div class="logo">
      <img src="${ramenLogo}" alt="RamenGo Logo" />
    </div>
    <div class="order-info">
      <img src="${response.image}" alt="${response.description}" />
      <h3>Your Order:</h3>
      <h2>${response.description}</h2>
    </div>
  `;
}

export function updateMain() {
  const main = document.getElementById('main');
  const brothsSection = document.getElementById('broths');
  const proteinsSection = document.getElementById('proteins');
  const buttonSection = document.getElementById('button');

  brothsSection.style.display = 'none';
  proteinsSection.style.display = 'none';

  const orderSuccessSection = document.createElement('section');
  orderSuccessSection.id = 'order-success';
  orderSuccessSection.innerHTML = `
    <div class="bowing">
      <img src="${bowing}" alt="RamenGo Illustration" />
    </div>
    <h3>どもありがとうございます。</h3>
    <h2>Your order is being prepared</h2>
    <p>Hold on, when you least expect you will be eating your rámen.</p>
  `;

  main.insertBefore(orderSuccessSection, buttonSection);
}
