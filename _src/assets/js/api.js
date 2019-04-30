'use strict';
const error = document.querySelector('.errorMsg');
const form = document.querySelector('.main__settings');
const linkContainer = document.querySelector('.share__link-container');
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const inputs = document.querySelectorAll('.fill__field');
const urlTwitter =
  'https://twitter.com/intent/tweet?text=I%20created%20in%20awesome%20profile-cards%20http://beta.adalab.es/fairfax-m2-wildcards/%20🃏%20my%20business%20card%20';
const shareButtonTwitter = document.querySelector('.share__button-twitter');
const loading = document.querySelector('.loading');

const validateUser = () => {
  let valid = true;

  for (const input of inputs) {
    const { id,value } = input;
    if (value === '' && id !== 'phone' && id !== 'add__img') {
      input.parentElement.classList.add('error');
      valid = false;
    }
  }

  if (userProfile.photo === imageUrlBase || userProfile.photo === '') {
    imageContainer.classList.add('error');
    valid = false;
  }
  return valid;
};

const setAttributes = (el, attrs) => {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const showURL = result => {
  const linkElement = document.createElement('a');
  if (result.success) {
    linkContainer.innerHTML = '';
    shareSection.classList.remove('hidden');
    const textLink = document.createTextNode(result.cardURL);
    setAttributes(linkElement, {"href": `${result.cardURL}`, "class":'share__link',"target": '_blank'});

    linkElement.appendChild(textLink);
    linkContainer.appendChild(linkElement);

    shareSection.classList.remove('hidden');
  } else {
    error.innerHTML = '';
    const textLink = document.createTextNode(`ERROR: ${result.error}.`);
    error.appendChild(textLink);
  }
};

const postData = user => {
  if (validateUser()) {

    createBtn.classList.add('share__button-active');
    error.innerHTML = '';
    loading.classList.remove('hidden');
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        showURL(result);
        loading.classList.add('hidden');

        const finalURL = urlTwitter + result.cardURL;
        shareButtonTwitter.href = finalURL;
      })
      .catch(error => {
        loading.classList.add('hidden');
        createBtn.classList.remove('share__button-active');
        error.innerHTML =
          'Se ha producido un error de servidor. Inténtalo de nuevo.';
      });
  } else {
    error.innerHTML = '';
    const textError = document.createTextNode(
      '* Para continuar rellene los campos obligatorios'
    );
    error.appendChild(textError);
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();
});

createBtn.addEventListener('click', () => {
  postData(userProfile);
});
