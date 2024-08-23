(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function _(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=_(l);fetch(l.href,c)}})();const b="/gendalf/assets/logo-CRR2GGr3.svg",h=`
    <header class="header">
      <div class="header__wrapper">
        <button type="search" class="header__search"></button>
        <button type="button" class="header__cart">
        </button>
        <a href="#" class="header__link">
          <img
            src=${b}
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
`,g=`
    <section class="welcome">
      <div class="welcome__wrapper">
        <h1 class="welcome__title">Добро пожаловать в ГЭНДАЛЬФ!</h1>
        <p class="welcome__description">
          Мы готовы поделиться секретом, почему любим компанию, в которой
          работаем. Если тебе будут близки наши ценности и идеи, то смело
          записывайся на собеседование!
        </p>
        <div class="welcome__wrapper-button">
          <button type="button" class="welcome__button">Почему мы</button>
          <button type="button" class="welcome__button">
            <a href="#sobes" class="welcome__link">
              Записаться на собеседование
            </a>
          </button>
        </div>
      </div>
    </section>
`,w=`
    <section class="description">
      <div class="description__wrapper">
        <h2 class="description__title">О том, чем мы занимаемся</h2>
        <p class="description__text">
          ГЭНДАЛЬФ – один из крупнейших игроков на рынке информационных
          технологий, занимающий 4 место среди 7000 партнеров фирмы «1С». У
          нас есть представительства в 15 городах России, а нашими услугами
          пользуются 23 000 организаций-клиентов, в числе которых «Базэл
          Аэро», «Ростсельмаш», UTG. Аэропорт Кольцово и многие другие.
          <br />
          <br />
          Мы тщательно подходим к выбору сотрудников, которые становятся
          частью команды профессионалов.
          <br />
          <br />
          У нас работают специалисты разных областей: программисты,
          маркетологи, менеджеры, копирайтеры, методисты и другие, чей
          карьерный рост не ограничен привычными рамками.
        </p>
        <div class="description__wrapper-btn">
          <button type="button" class="description__button">
            Узнать больше
          </button>
          <button type="button" class="description__button">
            <a href="#sobes" class="description__link">
              Записаться на собеседование
            </a>
          </button>
        </div>
      </div>
    </section>
`,v="/gendalf/assets/value1-D7abTYJ_.png",C="/gendalf/assets/value2-Yk3hrIuR.png",y="/gendalf/assets/value3-BhbP-Dj5.png",L="/gendalf/assets/value4-DygXMwdV.png",T="/gendalf/assets/value5-B74wxZh3.png",x=[{id:1,title:"Быть командой",text:"Готовность вносить вклад в общие цели команды и достигать их.",img:v},{id:2,title:"Побеждать и не сдаваться",text:"Быть ориентированным на результат, настойчивым и не сдаваться перед трудностями.",img:C},{id:3,title:"Заботиться о клиентах",text:"Выполнять обещания и интересоваться потребностями своих клиентов",img:y},{id:4,title:"Быть увлеченным и ответственным",text:"Вкладывать душу в то, что делаешь и получать от работы удовольствие.",img:L},{id:5,title:"Развиваться",text:"Постоянно расти личностно и профессионально для достижения поставленных целей.",img:T}];function k(){return x.map(i=>`
        <li class="value__item" key=${i.id}>
          <img
            src=${i.img}
            alt=${i.title}
            class="value__img"
          />
          <h3 class="value__subtitle">${i.title}</h3>
          <p class="value__description">
            ${i.text}
          </p>
        </li>
    `).join(`
`)}function M(){return`
    <section class="value">
      <div class="value__wrapper">
        <h2 class="value__title">Наши ценности скажут о нас больше:</h2>
        <ul class="value__list">
          ${k()}
        </ul>
      </div>
    </section>
`}const $=M(),H=`
    <section class="base">
      <div class="base__wrapper">
        <h2 class="base__title">Инфраструктура для твоего развития и роста</h2>
        <div class="base__wrapper-second">
          <p class="base__text">
            Мы создаем платформу для профессионального развития каждого
            сотрудника. Главная цель – дать возможность учиться, работать и
            получать удовольствие от каждой успешной задачи.
            <br/>
            <br/>
            О возможностях
            личностного роста в ГЭНДАЛЬФ расскажет руководитель Департамента
            персонала и карьеры Татьяна Арсенович.
          </p>
          <iframe
            class="base__iframe"
            src="https://www.youtube.com/embed/xy_NKN75Jhw?si=URkJjrw1Kg0tRJum"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
`,f="/gendalf/assets/tape1-DcTJ6JYs.png",m="/gendalf/assets/tape2-BYeAWEyI.png",q="/gendalf/assets/tape3-CcGF9wV4.png",j="/gendalf/assets/tape4-857ygwD8.png",n=[{id:1,img:f,alt:"Экономика",title:"Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года"},{id:2,img:m,alt:"Наушники",title:"Изменения 2022 года"},{id:3,img:q,alt:"Разработчик",title:"Почему стоит работать программистом в 2022 году"},{id:4,img:j,alt:"Пользователь ПК",title:"Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы"},{id:5,img:f,alt:"Экономика",title:"Экономим на бумаге и угадываем фильмы: дайджест видео марта 2023 года"},{id:6,img:m,alt:"Наушники",title:"Изменения 2023 года"}];function a(s=0,i=4){return n.slice(s,i).map(o=>`
      <li class="tape__card">
        <div>
          <img class="tape__img" src="${o.img}" alt="${o.alt}" />
          <p class="tape__title-card">${o.title}</p>
        </div>
        <a href="#" class="tape__link">Перейти к статье</a>
      </li>
    `).join(`
`)}function I(){const s=window.innerWidth;let i,_=0,o=4;return s>=1180&&(i=a(_,o)),900<s&&s<1180&&(i=a(_,o-1)),615<s&&s<=900&&(i=a(_,o-2)),s<=615&&(i=a(_,o-3)),`
    <section class="tape">
      <div class="tape__wrapper">
        <h2 class="tape__title">Живая лента</h2>
        <div class="tape__wrapper-second">
          <button class="tape__button tape__button-first">
            <span class="material-symbols-outlined"> arrow_back_ios </span>
          </button>
          <ul class="tape__wrapper-cards">
            ${i}
          </ul>
          <button class="tape__button tape__button-second">
            <span class="material-symbols-outlined"> arrow_forward_ios </span>
          </button>
        </div>
      </div>
    </section>
  `}const E=I(),W=`
    <section class="application">
      <div class="application__wrapper">
        <h2 class="application__title">
          Ты студент и хочешь устроиться на практику?
        </h2>
        <button class="application__button" type="button">
          <a href="#sobes" class="application__link">
            Оставить заявку
          </a>
        </button>
      </div>
    </section>`,Y=`
    <section class="answer">
        <div class="answer__wrapper">
          <h2 class="answer__title">Ответы на вопросы</h2>
          <ul class="answer__list-question">
            <li class="answer__item-question answer__item-question_active">
              <a class="answer__link">На что нужно обратить внимание на собеседовании?</a>
            </li>
            <p class="answer__text">
              Кроме умения представлять себя, грамотно разговаривать и опрятного
              внешнего вида, стоит обратить внимание еще на пару моментов. Они
              не очевидны, но очень эффективны.
            </p>
              <ul class="answer__list-recommendation">
                <li class="answer__item-recommendation">
                  <span class="answer__span">Сохраняйте спокойствие.</span>
                  Конечно, собеседование – это стрессовая ситуация, которая мешает
                  конструктивно мыслить. Если волнение берет верх – выпейте
                  немного воды, прижмите стопы к полу, а главное, помните: ничего
                  ужасного произойти не может.
                </li>
                <li class="answer__item-recommendation">
                  <span class="answer__span">Внимание к самопрезентации.</span>
                  Если собеседование – пьеса, вы – ее главный герой. Подготовьте
                  рассказ о себе заранее, опираясь на важные навыки, и опишите,
                  почему это важно для данной работы. Все это придаст вам
                  уверенности в себе.
                </li>
                <li class="answer__item-recommendation">
                  <span class="answer__span">Каверзные вопросы – это норма.</span>
                  Если вам задали какой-либо вопрос, который кажется вам сложным
                  или задевает личные качества, знайте – правильных ответов не
                  существует. Каверзные вопросы призваны показать вашу
                  стрессоустойчивость и умение ориентироваться в ситуации. Здесь
                  поможет адекватная самокритика и знания в своей профессии.
                </li>
              </ul>

            <li class="answer__item-question">
              <a class="answer__link">Как правильно составить резюме?</a>
            </li>
            <li class="answer__item-question">
              <a class="answer__link">Возможно ли устроиться без опыта?</a>
            </li>
            <li class="answer__item-question">
              <a class="answer__link">Ошибки на собеседовании. Чего нужно избегать?</a>
            </li>
          </ul>
        </div> 
      </section>
`,D="data:image/svg+xml,%3csvg%20width='28'%20height='27'%20viewBox='0%200%2028%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28%2020.2553C27.9066%2020.8533%2027.7731%2021.4445%2027.6004%2022.0251C27.2217%2023.2159%2026.5251%2024.2853%2025.5831%2025.1221C24.6411%2025.959%2023.488%2026.5326%2022.2438%2026.7835C21.0064%2027.0926%2019.7074%2027.0704%2018.4817%2026.7192C17.2561%2026.368%2016.1486%2025.7006%2015.2747%2024.7865C10.7454%2020.3655%206.2302%2015.9308%201.729%2011.4823C0.793851%2010.611%200.196928%209.4469%200.0408276%208.1902C-0.115273%206.9335%200.179199%205.66264%200.873631%204.59605C1.37057%203.76237%202.09107%203.07873%202.95653%202.61971C3.82199%202.16069%204.79917%201.94393%205.78148%201.99306C6.52065%201.99805%207.25121%202.14943%207.92945%202.43814C8.60769%202.72684%209.21967%203.14694%209.72879%203.6733C13.6177%207.48827%2017.5042%2011.3055%2021.3884%2015.1251C22.0966%2015.786%2022.5137%2016.6926%2022.5507%2017.6513C22.5878%2018.6101%2022.2418%2019.5451%2021.5867%2020.2568C20.9316%2020.9685%2020.0192%2021.4006%2019.0443%2021.4608C18.0694%2021.521%2017.1091%2021.2045%2016.3684%2020.579L16.0669%2020.3035L5.92871%2010.3736C5.77245%2010.2567%205.65551%2010.0964%205.59301%209.91344C5.53051%209.73052%205.52534%209.53339%205.57815%209.34755C5.61987%209.21128%205.69381%209.08663%205.79395%208.9838C5.89408%208.88096%206.01756%208.80285%206.15431%208.75584C6.29105%208.70884%206.43718%208.69427%206.58075%208.71333C6.72432%208.73239%206.86126%208.78453%206.98039%208.86551C7.07891%208.94493%207.17256%209.03001%207.26084%209.1203C10.6496%2012.4119%2014.008%2015.7035%2017.3359%2018.9952C17.584%2019.279%2017.9127%2019.4837%2018.2799%2019.5831C18.6471%2019.6824%2019.0361%2019.672%2019.3972%2019.5529C19.6785%2019.4601%2019.9333%2019.3029%2020.1406%2019.0943C20.3478%2018.8857%2020.5017%2018.6317%2020.5893%2018.3532C20.677%2018.0748%2020.696%2017.7798%2020.6447%2017.4927C20.5935%2017.2056%2020.4735%2016.9346%2020.2947%2016.702C20.1965%2016.585%2020.0914%2016.4679%2019.9862%2016.3646L8.4247%205.00922C7.75095%204.32315%206.83389%203.91853%205.8642%203.8795C4.8945%203.84047%203.94681%204.17004%203.21817%204.79968C2.48952%205.42931%202.036%206.31056%201.95191%207.26018C1.86782%208.2098%202.15963%209.15471%202.76666%209.89844C2.87884%2010.0224%202.99803%2010.1463%203.12423%2010.2703C7.58336%2014.6545%2012.0472%2019.0388%2016.5156%2023.423C17.3119%2024.2591%2018.3576%2024.8257%2019.5024%2025.0413C20.4551%2025.2208%2021.439%2025.152%2022.3562%2024.8419C23.2734%2024.5318%2024.0919%2023.9911%2024.7301%2023.2736C25.3684%2022.5562%2025.8042%2021.6871%2025.9941%2020.7528C26.184%2019.8185%2026.1214%2018.8516%2025.8125%2017.9484C25.5168%2017.0981%2025.0165%2016.3303%2024.3542%2015.7104L10.0934%201.68318C9.94191%201.56827%209.8271%201.4132%209.76249%201.23626C9.69789%201.05933%209.68619%200.867927%209.72879%200.684673C9.7671%200.536924%209.84262%200.401012%209.94843%200.289447C10.0542%200.177881%2010.1869%200.0942455%2010.3342%200.046238C10.4816%20-0.00176947%2010.6388%20-0.0126066%2010.7915%200.0147239C10.9443%200.0420544%2011.0875%200.106675%2011.2082%200.202637C11.2853%200.264613%2011.3554%200.340361%2011.4255%200.409224L25.7143%2014.4365C26.7918%2015.4812%2027.5247%2016.82%2027.8177%2018.279C27.8738%2018.5613%2027.9159%2018.8437%2027.9649%2019.126L28%2020.2553Z'%20fill='%239BCC37'/%3e%3c/svg%3e",J=`
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
                <img src=${D} alt="Скрепка"/>
              </button>
              <button type="submit" class="footer__button">Записаться</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
`,O=[h,g,w,$,H,E,W,Y,J];document.querySelector("#app").innerHTML=O.join(`
`);const u=document.querySelector(".value__list");u.addEventListener("wheel",s=>{s.deltaY!==0&&(u.scrollLeft+=u.scrollWidth/100*Math.sign(s.deltaY),s.preventDefault())});const r=document.querySelector(".tape__wrapper-cards"),R=document.querySelector(".tape__button-first"),S=document.querySelector(".tape__button-second"),p=window.innerWidth;let e=0,t=4;900<p&&p<1180&&(e=0,t=3);615<p&&p<=900&&(e=0,t=2);p<=615&&(e=0,t=1);R.addEventListener("click",()=>{const s=window.innerWidth;s>=1180&&(e-1<=0?(e=0,t=4):(e--,t--),r.innerHTML=a(e,t)),900<s&&s<=1180&&(e-1<=0?(e=0,t=3):(e--,t--),r.innerHTML=a(e,t)),615<s&&s<=900&&(e-1<=0?(e=0,t=2):(e--,t--),r.innerHTML=a(e,t)),s<=615&&(e-1<=0?(e=0,t=1):(e--,t--),r.innerHTML=a(e,t))});S.addEventListener("click",()=>{const s=window.innerWidth;s>=1180&&(t+1>=n.length?(e=n.length-4,t=n.length):(e++,t++),r.innerHTML=a(e,t)),900<s&&s<1180&&(t+1>=n.length?(e=n.length-3,t=n.length):(e++,t++),r.innerHTML=a(e,t)),615<s&&s<=900&&(t+1>=n.length?(e=n.length-2,t=n.length):(e++,t++),r.innerHTML=a(e,t)),s<=615&&(t+1>=n.length?(e=n.length-1,t=n.length):(e++,t++),r.innerHTML=a(e,t))});window.addEventListener("resize",()=>{const s=window.innerWidth;s>=1180&&(e=0,t=4,r.innerHTML=a(e,t)),900<s&&s<1180&&(e=0,t=3,r.innerHTML=a(e,t)),615<s&&s<=900&&(e=0,t=2,r.innerHTML=a(e,t)),s<=615&&(e=0,t=1,r.innerHTML=a(e,t))});
