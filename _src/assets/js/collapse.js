'use strict';
const titleArray = document.querySelectorAll('.collapse__title');
const fieldsets = document.querySelectorAll('.form__fieldset');

const activateCollapse = event => {
  const {currentTarget: currentTitle} = event;
  const titleContainer = currentTitle.parentElement;

  if (titleContainer.classList.contains('fieldset__active')) {
    titleContainer.classList.toggle('fieldset__active');
  }
  else {
    for (const fieldset of fieldsets) {
      fieldset.classList.remove('fieldset__active');
    }
    titleContainer.classList.toggle('fieldset__active');
  }
};

for (const title of titleArray) {
  title.addEventListener('click', activateCollapse);
}
