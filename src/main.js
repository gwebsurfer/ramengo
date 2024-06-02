import './styles/main.scss';

const brothsData = [
  {
    id: '1',
    imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
    name: 'Salt',
    description: 'Simple like the seawater, nothing more',
    price: 10,
  },
  {
    id: '2',
    imageInactive: 'https://tech.redventures.com.br/icons/shoyu/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/shoyu/active.svg',
    name: 'Shoyu',
    description: 'The good old and traditional soy sauce',
    price: 10,
  },
  {
    id: '3',
    imageInactive: 'https://tech.redventures.com.br/icons/miso/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/miso/active.svg',
    name: 'Miso',
    description: 'Paste made of fermented soybeans',
    price: 12,
  },
];

const proteinsData = [
  {
    id: '1',
    imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
    name: 'Chasu',
    description: 'A sliced flavourful pork meat with a selection of season vegetables.',
    price: 10,
  },
  {
    id: '2',
    imageInactive: 'https://tech.redventures.com.br/icons/yasai/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/yasai/active.svg',
    name: 'Yasai Vegetarian',
    description: 'A delicious vegetarian lamen with a selection of season vegetables.',
    price: 10,
  },
  {
    id: '3',
    imageInactive: 'https://tech.redventures.com.br/icons/chicken/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/chicken/active.svg',
    name: 'Karaague',
    description: 'Three units of fried chicken, moyashi, ajitama egg and other vegetables.',
    price: 12,
  }
];

function createSpinner() {
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  return spinner;
}

function createSlider(sectionId, data) {
  const section = document.querySelector(sectionId);
  const sliderItems = section.querySelector('.slider-items');
  const sliderBullets = section.querySelector('.slider-bullets');

  const spinner = createSpinner();
  sliderItems.appendChild(spinner);

  setTimeout(() => {
    sliderItems.removeChild(spinner);
    
    data.forEach((item, index) => {
      const sliderItem = document.createElement('div');
      sliderItem.className = 'slider-item';
      sliderItem.innerHTML = `
        <img src="${item.imageInactive}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <h6>${item.description}</h6>
        <p>US$ ${item.price}</p>
      `;
      sliderItems.appendChild(sliderItem);

      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      if (index === 0) bullet.classList.add('active');
      bullet.addEventListener('click', () => setActiveSlide(index, sectionId));
      sliderBullets.appendChild(bullet);
    });

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

  section.classList.add('slider-container');

  let clicked = false;
  section.addEventListener('click', () => {
    if (!clicked) {
      const section = document.querySelector(sectionId);
      const sliderItems = section.querySelector('.slider-items');
      const sliderItem = sliderItems.querySelectorAll('.slider-item')[activeSlide];
      const img = sliderItem.querySelector('img');
      img.src = data[activeSlide].imageActive;
      clicked = true;
    }
  });
}

createSlider('#broths', brothsData);
createSlider('#proteins', proteinsData);
