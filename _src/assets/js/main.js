'use strict';
const cardName = document.querySelector('.card__name');
const cardJob = document.querySelector('.card__job');
const selection1 = document.getElementById('selection1');
const cardPreview = document.querySelector('.preview__card');
const imageContainer = document.querySelector('.field__image-container');

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

function saveData() {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function getData() {
  return JSON.parse(localStorage.getItem('userProfile'));
}

// if local storage is empty
// userProfile = userDefault;
// saveData();

// else
// userProfile = getData();
// update previewcard
// update inputs
