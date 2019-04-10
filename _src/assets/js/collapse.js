'use strict';

const titleArray = document.querySelectorAll('.collapse__title');
const sectionArray = document.querySelectorAll('.section__collapse');
const arrowArray = document.querySelectorAll('.arrow');

const activateCollapse = event => {
  const currentTitle = event.currentTarget;
  const arrowEle = currentTitle.querySelector('.arrow');
  const sectionSibling = currentTitle.nextElementSibling;

  // if the section is open and we click it again
  if (!sectionSibling.classList.contains('hidden')) {
    sectionSibling.classList.toggle('hidden');
    arrowEle.classList.add('fa-chevron-down');
    arrowEle.classList.remove('fa-chevron-up');
    // if all sections are closed or one is open and we click on another section
  } else {
    for (const section of sectionArray) {
      section.classList.add('hidden');
    }
    for (const arrow of arrowArray) {
      arrow.classList.add('fa-chevron-down');
      arrow.classList.remove('fa-chevron-up');
    }
    arrowEle.classList.toggle('fa-chevron-up');
    sectionSibling.classList.remove('hidden');
  }
};

for (const title of titleArray) {
  title.addEventListener('click', activateCollapse);
}
