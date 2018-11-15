const Key = {
  ARROW_LEFT_KEY_CODE: 37,
  ARROW_RIGHT_KEY_CODE: 39
};

const main = document.querySelector('main');
const screens = document.querySelectorAll('template');
const numberFirstScreen = 0;
const numberLastScreen = screens.length - 1;
let numberCurrentScreen = 0;

let showScreen = (numberCurrentScreen) => {
  main.innerHTML = screens[numberCurrentScreen].innerHTML;
};

const changeScreen = (evt) => {
  if ((evt.target.id === `arrow-left`) || (evt.keyCode === Key.ARROW_LEFT_KEY_CODE)) {
    if (numberCurrentScreen === numberFirstScreen) {
      numberCurrentScreen = numberLastScreen;
      showScreen(numberCurrentScreen);
    } else {
      showScreen(--numberCurrentScreen);
    }
  } else if ((evt.target.id === `arrow-right`) || (evt.keyCode === Key.ARROW_RIGHT_KEY_CODE)) {
    if (numberCurrentScreen < numberLastScreen) {
      showScreen(++numberCurrentScreen);
    } else {
      numberCurrentScreen = numberFirstScreen;
      showScreen(numberCurrentScreen);
    }
  }
};

document.addEventListener(`keydown`, function (evt) {
  changeScreen(evt);
});

showScreen(0);

const arrows = document.createElement(`div`);
arrows.classList.add(`arrows__wrap`);
arrows.innerHTML = `<style>
.arrows__wrap {
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}
</style>
<button id='arrow-left' class="arrows__btn"><-</button>
<button id='arrow-right' class="arrows__btn">-></button>`;

document.querySelector(`body`).appendChild(arrows);

document.querySelector(`.arrows__wrap`).addEventListener(`click`, (evt) => {
    changeScreen(evt);
});
