export function updateHeader(response) {
  const header = document.getElementById('header');
  header.classList.remove('default-header');
  header.classList.add('success-header');

  header.innerHTML = `
    <div class="logo">
      <img src="/assets/logo/ramen-go-logo-2.svg" alt="RamenGo Logo" />
    </div>
    <img src="${response.image}" alt="${response.description}" />
    <h3>Your Order:</h3>
    <h2>${response.description}</h2>
  `;
}

export function updateMain() {
  const main = document.getElementById('main');
  document.querySelector('#broths').style.display = 'none';
  document.querySelector('#proteins').style.display = 'none';

  main.innerHTML = `
    <section id="order-success">
      <div class="order-success">
        <img src="./assets/bowing.svg" alt="RamenGo Illustration" />
        <h3>どもありがとうございます。</h3>
        <h2>Your order is being prepared</h2>
        <p>Hold on, when you least expect you will be eating your rámen.</p>
      </div>
    </section>
  `;
}
