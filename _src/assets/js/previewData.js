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
      linkEmail.href = `mailto:${value}`;
    }
    else {
      iconEmail.classList.add('hidden');
    }
  }
  email.addEventListener('keyup', defaultLinkEmail);