import './style.scss';

import { header } from './src/components/Header/Header';
import { welcome } from './src/components/Welcome/Welcome';
import { description } from './src/components/Description/Description';
import { value } from './src/components/Value/Value';
import { base } from './src/components/Base/Base';
import { arrTape, tape, renderTapeItems } from './src/components/Tape/Tape';
import { application } from './src/components/Application/Application';
import { answer } from './src/components/Answer/Answer';
import { footer } from './src/components/Footer/Footer';

const components = [
  header,
  welcome,
  description,
  value,
  base,
  tape,
  application,
  answer,
  footer,
];

document.querySelector('#app').innerHTML = components.join('\n');

const valueList = document.querySelector('.value__list');
valueList.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    valueList.scrollLeft +=
      (valueList.scrollWidth / 100) * Math.sign(event.deltaY);
    event.preventDefault();
  }
});

const tapeCards = document.querySelector('.tape__wrapper-cards');
const tapeLeftArrow = document.querySelector('.tape__button-first');
const tapeRightArrow = document.querySelector('.tape__button-second');
const width = window.innerWidth;
let startTape = 0;
let endTape = 4;

if (900 < width && width < 1180) {
  startTape = 0;
  endTape = 3;
}
if (615 < width && width <= 900) {
  startTape = 0;
  endTape = 2;
}
if (width <= 615) {
  startTape = 0;
  endTape = 1;
}

tapeLeftArrow.addEventListener('click', () => {
  const width = window.innerWidth;

  if (width >= 1180) {
    if (startTape - 1 <= 0) {
      startTape = 0;
      endTape = 4;
    } else {
      startTape--;
      endTape--;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (900 < width && width <= 1180) {
    if (startTape - 1 <= 0) {
      startTape = 0;
      endTape = 3;
    } else {
      startTape--;
      endTape--;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (615 < width && width <= 900) {
    if (startTape - 1 <= 0) {
      startTape = 0;
      endTape = 2;
    } else {
      startTape--;
      endTape--;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (width <= 615) {
    if (startTape - 1 <= 0) {
      startTape = 0;
      endTape = 1;
    } else {
      startTape--;
      endTape--;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
});

tapeRightArrow.addEventListener('click', () => {
  const width = window.innerWidth;

  if (width >= 1180) {
    if (endTape + 1 >= arrTape.length) {
      startTape = arrTape.length - 4;
      endTape = arrTape.length;
    } else {
      startTape++;
      endTape++;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (900 < width && width < 1180) {
    if (endTape + 1 >= arrTape.length) {
      startTape = arrTape.length - 3;
      endTape = arrTape.length;
    } else {
      startTape++;
      endTape++;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (615 < width && width <= 900) {
    if (endTape + 1 >= arrTape.length) {
      startTape = arrTape.length - 2;
      endTape = arrTape.length;
    } else {
      startTape++;
      endTape++;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (width <= 615) {
    if (endTape + 1 >= arrTape.length) {
      startTape = arrTape.length - 1;
      endTape = arrTape.length;
    } else {
      startTape++;
      endTape++;
    }

    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
});
window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width >= 1180) {
    startTape = 0;
    endTape = 4;
    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (900 < width && width < 1180) {
    startTape = 0;
    endTape = 3;
    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (615 < width && width <= 900) {
    startTape = 0;
    endTape = 2;
    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
  if (width <= 615) {
    startTape = 0;
    endTape = 1;
    tapeCards.innerHTML = renderTapeItems(startTape, endTape);
  }
});

