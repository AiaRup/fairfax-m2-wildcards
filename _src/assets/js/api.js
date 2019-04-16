'use strict';

const createBtn = document.querySelector('.share__button-create');
const error = document.querySelector('.error');
const shareSection = document.querySelector('.share__hidden');
const form = document.querySelector('.main__settings');
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card';

const postData = user => {
  console.log('user', userProfile);
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {
      console.log('result', result);
      showURL(result);
    })
    .catch(error => console.log('error', error));
};

function showURL(result) {
  const linkElement = document.createElement('a');
  if (result.success) {
    shareSection.classList.remove('hidden');
    const textLink = document.createTextNode(result.cardURL);
    linkElement.appendChild(textLink);
    linkElement.setAttribute('href', `${result.cardURL}`);
    linkElement.setAttribute('class', 'share__link');
  } else {
    const textLink = document.createTextNode(`ERROR: ${result.error}`);
    error.appendChild(textLink);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
});

createBtn.addEventListener('click', () => {
  console.log('in create card');
  postData(userProfile);
});

// hide the share section
// if all fields are valid
// div for errors
// class for input with errors
