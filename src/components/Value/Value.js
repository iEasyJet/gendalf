import img1 from '../../imgs/value1.png';
import img2 from '../../imgs/value2.png';
import img3 from '../../imgs/value3.png';
import img4 from '../../imgs/value4.png';
import img5 from '../../imgs/value5.png';

const arrValue = [
  {
    id: 1,
    title: 'Быть командой',
    text: 'Готовность вносить вклад в общие цели команды и достигать их.',
    img: img1,
  },
  {
    id: 2,
    title: 'Побеждать и не сдаваться',
    text: 'Быть ориентированным на результат, настойчивым и не сдаваться перед трудностями.',
    img: img2,
  },
  {
    id: 3,
    title: 'Заботиться о клиентах',
    text: 'Выполнять обещания и интересоваться потребностями своих клиентов',
    img: img3,
  },
  {
    id: 4,
    title: 'Быть увлеченным и ответственным',
    text: 'Вкладывать душу в то, что делаешь и получать от работы удовольствие.',
    img: img4,
  },
  {
    id: 5,
    title: 'Развиваться',
    text: 'Постоянно расти личностно и профессионально для достижения поставленных целей.',
    img: img5,
  },
];

function createItem() {
  const res = arrValue.map((el) => {
    return `
        <li class="value__item" key=${el.id}>
          <img
            src=${el.img}
            alt=${el.title}
            class="value__img"
          />
          <h3 class="value__subtitle">${el.title}</h3>
          <p class="value__description">
            ${el.text}
          </p>
        </li>
    `;
  });
  return res.join('\n');
}
function createValue() {
  return `
    <section class="value">
      <div class="value__wrapper">
        <h2 class="value__title">Наши ценности скажут о нас больше:</h2>
        <ul class="value__list">
          ${createItem()}
        </ul>
      </div>
    </section>
`;
}

export const value = createValue();
