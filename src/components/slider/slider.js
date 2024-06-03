import { createSpinner } from '../spinner/spinner.js';

export function createSlider(sectionId, data, checkOrderButton, activeItemId) {
  const section = document.querySelector(sectionId);
  const sliderItems = section.querySelector('.slider-items');
  const sliderBullets = section.querySelector('.slider-bullets');

  const spinner = createSpinner();
  sliderItems.appendChild(spinner);

  setTimeout(() => {
    sliderItems.removeChild(spinner);

    data.forEach((item, index) => {
      const sliderItem = createSliderItem(item, activeItemId);
      sliderItems.appendChild(sliderItem);

      const bullet = createBullet(index, sectionId);
      sliderBullets.appendChild(bullet);
    });

    addClickEventToItems(sectionId, data, checkOrderButton);
  }, 2000);

  let activeSlide = 0;

  function setActiveSlide(index, sectionId) {
    const section = document.querySelector(sectionId);
    const sliderItems = section.querySelector('.slider-items');
    sliderItems.style.transform = `translateX(-${index * 100}%)`;
    section.querySelector('.bullet.active').classList.remove('active');
    section.querySelectorAll('.bullet')[index].classList.add('active');
    activeSlide = index;
  }

  function createSliderItem(item, activeItemId) {
    const sliderItem = document.createElement('div');
    sliderItem.className = 'slider-item';
    sliderItem.dataset.id = item.id;
    sliderItem.innerHTML = `
      <img src="${item.imageInactive}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <h6>${item.description}</h6>
      <p>US$ ${item.price}</p>
    `;
    if (item.id === activeItemId) {
      sliderItem.classList.add('active');
      sliderItem.querySelector('img').src = item.imageActive;
    }
    return sliderItem;
  }

  function createBullet(index, sectionId) {
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    if (index === 0) bullet.classList.add('active');
    bullet.addEventListener('click', () => setActiveSlide(index, sectionId));
    return bullet;
  }
}

function addClickEventToItems(sectionId, data, checkOrderButton) {
  const section = document.querySelector(sectionId);
  const sliderItems = section.querySelector('.slider-items');
  const items = sliderItems.querySelectorAll('.slider-item');

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      section.querySelector('.slider-item.active')?.classList.remove('active');
      item.classList.add('active');
      item.querySelector('img').src = data[index].imageActive;

      items.forEach((i, idx) => {
        if (idx !== index) {
          i.classList.remove('active');
          i.querySelector('img').src = data[idx].imageInactive;
        }
      });
      saveActiveItemId(sectionId, data[index].id, checkOrderButton);
    });
  });
}

function saveActiveItemId(sectionId, itemId, checkOrderButton) {
  const category = sectionId.replace('#', '');
  localStorage.setItem(`${category}Id`, itemId);
  checkOrderButton();
}
