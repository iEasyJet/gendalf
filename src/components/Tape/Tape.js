import img1 from '../../imgs/tape1.png';
import img2 from '../../imgs/tape2.png';
import img3 from '../../imgs/tape3.png';
import img4 from '../../imgs/tape4.png';

export const arrTape = [
  {
    id: 1,
    img: img1,
    alt: 'Экономика',
    title:
      'Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года',
  },
  {
    id: 2,
    img: img2,
    alt: 'Наушники',
    title: 'Изменения 2022 года',
  },
  {
    id: 3,
    img: img3,
    alt: 'Разработчик',
    title: 'Почему стоит работать программистом в 2022 году',
  },
  {
    id: 4,
    img: img4,
    alt: 'Пользователь ПК',
    title:
      'Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы',
  },
  {
    id: 5,
    img: img1,
    alt: 'Экономика',
    title:
      'Экономим на бумаге и угадываем фильмы: дайджест видео марта 2023 года',
  },
  {
    id: 6,
    img: img2,
    alt: 'Наушники',
    title: 'Изменения 2023 года',
  },
];

export function renderTapeItems(start = 0, end = 4) {
  const tapeItems = arrTape
    .slice(start, end)
    .map((item) => {
      return `
      <li class="tape__card">
        <div>
          <img class="tape__img" src="${item.img}" alt="${item.alt}" />
          <p class="tape__title-card">${item.title}</p>
        </div>
        <a href="#" class="tape__link">Перейти к статье</a>
      </li>
    `;
    })
    .join('\n');
  return tapeItems;
}

function renderTape() {
  const width = window.innerWidth;
  let renderItems;
  let startTape = 0;
  let endTape = 4;

  if (width >= 1180) {
    renderItems = renderTapeItems(startTape, endTape);
  }
  if (900 < width && width < 1180) {
    renderItems = renderTapeItems(startTape, endTape - 1);
  }
  if (615 < width && width <= 900) {
    renderItems = renderTapeItems(startTape, endTape - 2);
  }
  if (width <= 615) {
    renderItems = renderTapeItems(startTape, endTape - 3);
  }

  return `
    <section class="tape">
      <div class="tape__wrapper">
        <h2 class="tape__title">Живая лента</h2>
        <div class="tape__wrapper-second">
          <button class="tape__button tape__button-first">
            <span class="material-symbols-outlined"> arrow_back_ios </span>
          </button>
          <ul class="tape__wrapper-cards">
            ${renderItems}
          </ul>
          <button class="tape__button tape__button-second">
            <span class="material-symbols-outlined"> arrow_forward_ios </span>
          </button>
        </div>
      </div>
    </section>
  `;
}

export const tape = renderTape();
