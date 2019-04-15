'use strict';

const createBtn = document.querySelector('.share__button-create');
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card';

const postData = () => {
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
    });
};

createBtn.addEventListener('click', postData);
