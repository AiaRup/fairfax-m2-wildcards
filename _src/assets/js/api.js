'use strict';

const createBtn = document.querySelector('.share__button-create');
const error = document.querySelector('.errorMsg');
const shareSection = document.querySelector('.share__hidden');
const form = document.querySelector('.main__settings');
const linkContainer = document.querySelector('.share__link-container');
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const inputs = document.querySelectorAll('.fill__field');

// const dataCard = {
//   palette: 1,
//   name: 'Carlos Mananas',
//   job: 'Tuerto',
//   phone: '+34 555435345',
//   email: 'carlos@adalab.es',
//   linkedin: 'oneeyedman',
//   github: 'oneeyedman',
//   photo: imageUrlBase,
// };

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

const postData = user => {
  console.log(validateUser());
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

function showURL(result) {
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
}

form.addEventListener('submit', event => {
  event.preventDefault();
});

createBtn.addEventListener('click', () => {
  console.log('in create card');
  postData(userProfile);
});
