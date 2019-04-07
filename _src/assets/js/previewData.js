'use strict';

const name = document.getElementById('name');
const cardName = document.querySelector('.card__name');
const job = document.getElementById('job');
const cardJob = document.querySelector('.card__job');
const linkEmail = document.querySelector('.email__link');
const email = document.getElementById('email');
const iconEmail = document.querySelector('.sm__email');
const linkMobile = document.querySelector('.mobile__link');
const mobile = document.getElementById('phone');
const iconMobile = document.querySelector('.sm__mobile');
const linkLinkedin = document.querySelector('.linkedin__link');
const linkedin = document.getElementById('linkedin');
const iconLinkedin = document.querySelector('.sm__linkedin');
const linkGit = document.querySelector('.github__link');
const github = document.getElementById('github');
const iconGit = document.querySelector('.sm__github');

const changeDataCard = (cardInput, defaultData, formInput) => {
  const value = formInput.value;
  if (value === '') {
    cardInput.innerHTML = defaultData;
  } else {
    cardInput.innerHTML = value;
  }
};

name.addEventListener('keyup', () => {
  changeDataCard(cardName, 'Nombre Apellido', name);
});

job.addEventListener('keyup', () => {
  changeDataCard(cardJob, 'Front-end developer', job);
});

const changeLinkCard = (cardInput, link, formInput, defaultHref) => {
  const value = formInput.value;
  if (value === '') {
    cardInput.classList.add('hidden');
    link.href = '';
  } else {
    cardInput.classList.remove('hidden');
    link.href = defaultHref + value;
  }
};

email.addEventListener('keyup', () => {
  changeLinkCard(iconEmail, linkEmail, email, `mailto:`);
});

mobile.addEventListener('keyup', () => {
  changeLinkCard(iconMobile, linkMobile, mobile, `tel:`);
});

linkedin.addEventListener('keyup', () => {
  changeLinkCard(iconLinkedin, linkLinkedin, linkedin, '');
});

github.addEventListener('keyup', () => {
  changeLinkCard(iconGit, linkGit, github, '');
});
