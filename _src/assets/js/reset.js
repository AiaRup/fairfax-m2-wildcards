'use strict';

const fillFields = document.querySelectorAll('.fill__field');
const resetButton = document.querySelector('.preview__button');
const icons = document.querySelectorAll('.card__link-sm');
const cardImage = document.querySelector('.card__image');
const fillPreview = document.querySelector('.fill__preview-little');

const defaultUser = {
  name: 'nombre apellido',
  job: 'Front-end developer',
  photo: imageUrlBase,
  palette: 1,
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

function resetPreview() {
  for (const input of fillFields) {
    input.value = '';
    fillPreview.style.backgroundImage = 'url()';
  }
  for (const icon of icons) {
    if (!icon.classList.contains('hidden')) {
      icon.classList.add('hidden');
    }
  }
  // reset card preview
  cardName.innerHTML = defaultUser.name;
  cardJob.innerHTML = defaultUser.job;
  cardImage.style.backgroundImage = `url(${defaultUser.photo})`;
  // reset palette
  selection1.checked = true;
  selection2.checked = false;
  selection3.checked = false;
  cardPreview.classList.remove('theme1', 'theme2', 'theme3');
  cardPreview.classList.add('theme1');

  // reset user object
  userProfile = {
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
  };
}

resetButton.addEventListener('click', resetPreview);
