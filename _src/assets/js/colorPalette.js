'use strict';

const selection2 = document.getElementById('selection2');
const selection3 = document.getElementById('selection3');

const colorArr = ['theme1', 'theme2', 'theme3'];


const changeColorPalette = (event, classToAdd) => {
  cardPreview.classList.remove(... colorArr);
  cardPreview.classList.add(classToAdd);
  createBtn.classList.remove('share__button-active');
  startOver();
  userProfile.palette = parseInt(event.path[0].dataset.theme);
  saveData();
};

selection1.addEventListener('change', event => {
  changeColorPalette(event, colorArr[0]);
});

selection2.addEventListener('change', event => {
  changeColorPalette(event, colorArr[1]);
});

selection3.addEventListener('change', event => {
  changeColorPalette(event, colorArr[2]);
});
