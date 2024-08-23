export const header = `
    <header class="header">
      <div class="header__wrapper">
        <button type="search" class="header__search"></button>
        <button type="button" class="header__cart">
        </button>
        <a href="#" class="header__link">
          <img
            src="./src/imgs/logo.svg"
            alt="Логотип Гендальф"
            class="header__logo"
          />
        </a>

        <button type="button" class="header__profile"></button>

        <input type="checkbox" id="burger-checkbox" class="header__burger-checkbox">
        <label for="burger-checkbox" class="header__burger"></label>

        <ul class="list">
          <li class="list__item">
            <a href="#" class="list__link">Профориентация</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Выбрать вакансию</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Карьера в ГЭНДАЛЬФ</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Стажерство</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Отзывы</a>
          </li>
        </ul>
        <button class="header__button">
          <a href="#sobes" class="header__link">
            Запись на собеседование
          </a>
        </button>
      </div>
    </header>
`;
