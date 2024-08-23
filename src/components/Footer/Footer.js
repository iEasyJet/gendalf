export const footer = `
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__wrapper-second">
          <h2 class="footer__title">Записаться на собеседование</h2>
          <form class="footer__form" id="sobes">
            <div class="footer__inputs_wrapper">
              <input class="footer__input" type="text" placeholder="Как к вам обращаться?" value="">
              <input class="footer__input" type="tel" placeholder="Телефон" value="" pattern="[0-9]{,11}}">
              <input class="footer__input" type="email" placeholder="Email" value="">
              <input class="footer__input" type="text" placeholder="Желаемая должность" value="">
            </div>  
            <h3 class="footer__title-radio">Выберите категорию занятости</h3>
            <div class="footer__group-radio">
              <div class="footer__radio">
                <input type="radio" id="office" name="type-job" value="office" checked />
                <label for="office">Работа в офисе</label>
              </div>
              <div class="footer__radio">
                <input type="radio" id="stage" name="type-job" value="stage" />
                <label for="stage">Стажировка</label>
              </div>
              <div class="footer__radio">
                <input type="radio" id="remote" name="type-job" value="remote" />
                <label for="remote">Удаленная работа</label>
              </div>
            </div>
            <textarea class="footer__input-text" rows="5" cols="33" placeholder="Ваши вопросы "></textarea>
            <div class="footer__wrapper-button">
              <button type="file" class="footer__button">
                Прикрепить резюме
                <img src="./src/imgs/footer__vector.svg" alt="Скрепка"/>
              </button>
              <button type="submit" class="footer__button">Записаться</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
`;
