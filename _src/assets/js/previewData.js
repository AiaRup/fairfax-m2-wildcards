'use strict';

console.log('preview');

const name = document.getElementById('name');
const cardName = document.querySelector('.card__name')
const job = document.getElementById('job');
const cardJob = document.querySelector('.card__job')

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