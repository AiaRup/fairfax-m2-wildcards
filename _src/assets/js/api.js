'use strict';

const createBtn = document.querySelector('.share__button-create');
const error = document.querySelector('.errorMsg');
const shareSection = document.querySelector('.share__hidden');
const form = document.querySelector('.main__settings');
const linkContainer = document.querySelector('.share__link-container');
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const inputs = document.querySelectorAll('.fill__field');
const urlTwitter =
  'https://twitter.com/intent/tweet?text=I%20created%20in%20awesome%20profile-cards%20http://beta.adalab.es/fairfax-m2-wildcards/%20my%20business%20card%20';
const shareButtonTwitter = document.querySelector('.share__button-twitter');

const validateUser = () => {
  let valid = true;
  // validate if inputs are empty
  for (const input of inputs) {
    if (input.value === '' && input.id !== 'phone') {
      input.parentElement.classList.add('error');
      valid = false;
    }
  }
  // validate change of default image
  if (userProfile.photo === imageUrlBase || userProfile.photo === '') {
    imageContainer.classList.add('error');
    valid = false;
  }
  return valid;
};

const showURL = result => {
  const linkElement = document.createElement('a');
  if (result.success) {
    shareSection.classList.remove('hidden');
    const textLink = document.createTextNode(result.cardURL);
    linkElement.appendChild(textLink);
    linkElement.setAttribute('href', `${result.cardURL}`);
    linkElement.setAttribute('class', 'share__link');
    linkElement.setAttribute('target', '_blank');
    linkElement.appendChild(textLink);
    linkContainer.appendChild(linkElement);
  } else {
    error.innerHTML = '';
    const textLink = document.createTextNode(`ERROR: ${result.error}`);
    error.appendChild(textLink);
  }
};

const postData = user => {
  if (validateUser()) {
    // change button style
    createBtn.classList.add('share__button-active');
    console.log('user', userProfile);
    // clean msg div
    error.innerHTML = '';
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
        // show share section
        shareSection.classList.remove('hidden');
        showURL(result);
        // Añadir url para twitter
        const finalURL = urlTwitter + result.cardURL;
        shareButtonTwitter.href = finalURL;
      })
      .catch(error => {
        createBtn.classList.remove('share__button-active');
        console.log('error', error);
        error.innerHTML =
          'Se ha producido un error de servidor. Inténtalo de nuevo.';
        // const textError = document.createTextNode(
        //   'Se ha producido un error de servidor. Inténtalo de nuevo.'
        // );
        // error.appendChild(textError);
      });
  } else {
    error.innerHTML = '';
    const textError = document.createTextNode(
      '* Para continuar rellene los campos obligatorios'
    );
    error.appendChild(textError);
  }
};

// prevent form submit
form.addEventListener('submit', event => {
  event.preventDefault();
});

createBtn.addEventListener('click', () => {
  postData(userProfile);
});
