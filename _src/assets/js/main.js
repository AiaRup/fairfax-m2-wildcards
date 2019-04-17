'use strict';
const cardName = document.querySelector('.card__name');
const cardJob = document.querySelector('.card__job');
const selection1 = document.getElementById('selection1');
const cardPreview = document.querySelector('.preview__card');
const imageContainer = document.querySelector('.field__image-container');
const fakeImages = document.querySelectorAll('.img__user');

let userProfile = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};
