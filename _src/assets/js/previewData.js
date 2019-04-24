'use strict';

const name = document.getElementById('name');
const job = document.getElementById('job');
const linkEmail = document.querySelector('.email__link');
const email = document.getElementById('email');
const iconEmail = document.querySelector('.sm__email');
const linkMobile = document.querySelector('.mobile__link');
const mobile = document.getElementById('phone');
const iconMobile = document.querySelector('.sm__phone');
const linkLinkedin = document.querySelector('.linkedin__link');
const linkedin = document.getElementById('linkedin');
const iconLinkedin = document.querySelector('.sm__linkedin');
const linkGit = document.querySelector('.github__link');
const github = document.getElementById('github');
const iconGit = document.querySelector('.sm__github');

const changeDataCard = (cardInput, defaultData, formInput) => {
  // change style of inputs error and button to create card
  formInput.parentElement.classList.remove('error');
  // createBtn.classList.remove('share__button-active');
  startOver();
  const value = formInput.value;
  const objectKey = formInput.id;
  userProfile[objectKey] = value;
  saveData();
  if (value === '') {
    cardInput.innerHTML = defaultData;
  } else {
    cardInput.innerHTML = value;
  }
};

name.addEventListener('keyup', () => {
  changeDataCard(cardName, defaultUser.name, name);
});

job.addEventListener('keyup', () => {
  changeDataCard(cardJob, defaultUser.job, job);
});

const changeLinkCard = (cardInput, link, formInput) => {
  formInput.parentElement.classList.remove('error');
  startOver();
  const value = formInput.value;
  const objectKey = formInput.id;
  userProfile[objectKey] = value;
  saveData();
  if (value === '') {
    cardInput.classList.add('hidden');
    link.href = '';
  } else {
    cardInput.classList.remove('hidden');
    link.href = formInput.dataset['info'] + value;
  }
};

email.addEventListener('keyup', () => {
  changeLinkCard(iconEmail, linkEmail, email);
});

mobile.addEventListener('keyup', () => {
  changeLinkCard(iconMobile, linkMobile, mobile);
});

linkedin.addEventListener('keyup', () => {
  changeLinkCard(iconLinkedin, linkLinkedin, linkedin);
});

github.addEventListener('keyup', () => {
  changeLinkCard(iconGit, linkGit, github);
});
