'use strict';

console.log('preview');

const name = document.getElementById('name');
const cardName = document.querySelector('.card__name');
const job = document.getElementById('job');
const cardJob = document.querySelector('.card__job');
const linkEmail = document.querySelector('.email__link');
const email = document.getElementById('email');
const iconEmail =document.querySelector('.sm__email');
const linkMobile = document.querySelector('.mobile__link');
const mobile = document.getElementById('phone');
const iconMobile =document.querySelector('.sm__mobile');
const linkLinkedin = document.querySelector('.linkedin__link');
const linkedin = document.getElementById('linkedin');
const iconLinkedin =document.querySelector('.sm__linkedin');
const linkGit = document.querySelector('.github__link');
const github = document.getElementById('github');
const iconGit =document.querySelector('.sm__github');

function defaultName() { 
  const value = name.value;
  if (value === '') {
    cardName.innerHTML = 'Nombre Apellido';
  }
  else {
    cardName.innerHTML = value; 
  }
}
name.addEventListener('keyup', defaultName);

function defaultJob() { 
    const value = job.value;
    if (value === '') {
      cardJob.innerHTML = 'Front-end developer';
    }
    else {
      cardJob.innerHTML = value; 
    }
  }
  job.addEventListener('keyup', defaultJob);

  function defaultLinkEmail() { 
    const value = email.value;
    if (value === '') {
      iconEmail.classList.add('hidden');
    }
    else {
      iconEmail.classList.remove('hidden');
      linkEmail.href = `mailto:${value}`;
    }
  } 
  email.addEventListener('keyup', defaultLinkEmail);


  function defaultLinkMobile() { 
    const value = mobile.value;
    if (value === '') {
      iconMobile.classList.add('hidden');
    }
    else {
      iconMobile.classList.remove('hidden');
      linkMobile.href = `tel:${value}`;
    }
  } 
  mobile.addEventListener('keyup', defaultLinkMobile);

  function defaultLinkLinkedin() { 
    const value = linkedin.value;
    if (value === '') {
      iconLinkedin.classList.add('hidden');
    }
    else {
      iconLinkedin.classList.remove('hidden');
      linkLinkedin.href = value;
    }
  } 
  linkedin.addEventListener('keyup', defaultLinkLinkedin);

  function defaultLinkGithub() { 
    const value = github.value;
    if (value === '') {
      iconGit.classList.add('hidden');
    }
    else {
      iconGit.classList.remove('hidden');
      linkGit = value;
    }
  } 
  github.addEventListener('keyup', defaultLinkGithub);