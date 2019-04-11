'use strict';

const fill__fields = document.querySelectorAll('.fill__field');
const resetButton = document.querySelector('.preview__button');
const card__name = document.querySelector('.card__name');
const card__job = document.querySelector('.card__job');
const icons = document.querySelectorAll('.card__link-sm');
const card__image = document.querySelector('.card__image');
const fill__preview = document.querySelector('.fill__preview-little');

const defaultUser = {
  name: 'nombre apellido',
  job: 'Front-end developer',
  image: imageUrlBase
};

function resetPreview() {
  for (const input of fill__fields) {
    input.value = '';
    fill__preview.style.backgroundImage = 'url()';
  }
  for (const icon of icons) {
    if (!icon.classList.contains('hidden')) {
      icon.classList.add('hidden');
    }
  }
  card__name.innerHTML = defaultUser.name;
  card__job.innerHTML = defaultUser.job;
  card__image.style.backgroundImage = `url(${defaultUser.image})`;
  userProfile = {
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    image: ''
  };
}

resetButton.addEventListener('click', resetPreview);
