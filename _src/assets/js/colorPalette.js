'use strict';

const selection2 = document.getElementById('selection2');
const selection3 = document.getElementById('selection3');
const createBtn = document.querySelector('.share__button-create');
const shareSection = document.querySelector('.share__hidden');

const startOver = () => {
  createBtn.classList.remove('share__button-active');
  shareSection.classList.add('hidden');
}

const changeColorPalette = (event, classToAdd) => {
  cardPreview.classList.remove(... themes);
  cardPreview.classList.add(classToAdd);
  createBtn.classList.remove('share__button-active');
  startOver();
  userProfile.palette = parseInt(event.path[0].dataset.theme);
  saveData();
};

selection1.addEventListener('change', event => {
  changeColorPalette(event, themes[0]);
});

selection2.addEventListener('change', event => {
  changeColorPalette(event, themes[1]);
});

selection3.addEventListener('change', event => {
  changeColorPalette(event, themes[2]);
});
