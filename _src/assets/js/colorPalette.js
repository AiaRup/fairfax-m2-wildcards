'use strict';

const selection2 = document.getElementById('selection2');
const selection3 = document.getElementById('selection3');

const changeColorPalette = (event, classToAdd) => {
  cardPreview.classList.remove('theme1', 'theme2', 'theme3');
  cardPreview.classList.add(classToAdd);
  // update create btn style
  createBtn.classList.remove('share__button-active');
  startOver();
  // change palette of userProfile object
  userProfile.palette = parseInt(event.path[0].dataset.theme);
  saveData();
};

selection1.addEventListener('change', event => {
  changeColorPalette(event, 'theme1');
});

selection2.addEventListener('change', event => {
  changeColorPalette(event, 'theme2');
});

selection3.addEventListener('change', event => {
  changeColorPalette(event, 'theme3');
});
