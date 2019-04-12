'use strict';
const cardName = document.querySelector('.card__name');
const cardJob = document.querySelector('.card__job');
const selection1 = document.getElementById('selection1');
const cardPreview = document.querySelector('.preview__card');

let userProfile = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: '',
};

//Save object in localStorage

function saveData(){
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function getData(){
  const tempData = JSON.parse(localStorage.getItem('userProfile'));
}