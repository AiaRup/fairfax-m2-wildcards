'use strict';

const cardPreview = document.querySelector('.preview__card');
const selection1 = document.getElementById('selection1');
const selection2 = document.getElementById('selection2');
const selection3 = document.getElementById('selection3');

const changeColorPalette = classToAdd => {
  cardPreview.classList.remove('theme1', 'theme2', 'theme3');
  cardPreview.classList.add(classToAdd);
};

selection1.addEventListener('change', () => {
  changeColorPalette('theme1');
});
selection2.addEventListener('change', () => {
  changeColorPalette('theme2');
});
selection3.addEventListener('change', () => {
  changeColorPalette('theme3');
});
