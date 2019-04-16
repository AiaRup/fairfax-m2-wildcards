'use strict';

const createBtn = document.querySelector('.share__button-create');
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card';

const postData = () => {
  console.log('user', userProfile);
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(userProfile),
  })
    .then(response => response.json())
    .then(result => {
      console.log('result', result);
    })
    .catch(error => console.log('error', error));
};

createBtn.addEventListener('click', postData);

// hide the share section
// if all fields are valid
// div for errors
// class for input with errors
