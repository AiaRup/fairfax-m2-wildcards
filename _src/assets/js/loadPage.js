'use strict';
const themes = ['theme1', 'theme2', 'theme3'];
const radioButtons = document.querySelectorAll('input[type="radio"]');

function updatePaletteOnLoad(storagePalette) {
  const currentPalette = storagePalette;
  cardPreview.classList.remove(...themes);
  cardPreview.classList.add(`theme${currentPalette}`);
  for (const radio of radioButtons) {
    if (parseInt(radio.dataset['theme']) === currentPalette) {
      radio.checked = true;
    } else {
      radio.checked = false;
    }
  }
}

function updateImageOnLoad(img) {
  profileImage.style.backgroundImage = `url(${img})`;
  profilePreview.style.backgroundImage = `url(${img})`;
  // update fake images
  for (const image of fakeImages) {
    image.src = img;
    image.alt = 'Imagen de perfil';
  }
}

function updateTextAndLinks(userProp, localData, input) {
  if (userProp === 'name' || userProp === 'job') {
    const cardTextToUpdate = document.querySelector(`.card__${userProp}`);
    cardTextToUpdate.innerHTML = localData.charAt(0).toUpperCase()+localData.slice(1);
  } else {
    const listLinkToUpdate = document.querySelector(`.sm__${userProp}`);
    listLinkToUpdate.classList.remove('hidden');
    const linkToUpdate = listLinkToUpdate.querySelector('a');
    linkToUpdate.href = input.dataset['info'] + localData;
  }
}

// Load localStorage's data on card and form
function reload() {
  const infoLocal = getData();
  if (infoLocal !== null) {
    // update user object
    userProfile = infoLocal;
    // Show info in inputs
    for (let property in infoLocal) {
      const currentProp = infoLocal[property];
      if (
        property !== 'photo' &&
        property !== 'palette' &&
        currentProp !== ''
      ) {
        const input = document.querySelector(`#${property}`);
        input.value = currentProp;
        // update card preview - name, job and links
        updateTextAndLinks(property, currentProp, input);
      } else {
        if (property === 'palette') {
          // update card palette and radio button
          updatePaletteOnLoad(currentProp);
        }
        if (infoLocal.photo !== '' && property === 'photo') {
          // update image and preview image and 2 fake images
          const { photo: img } = infoLocal;
          updateImageOnLoad(img);
        }
      }
    }
  }
}

window.addEventListener('load', reload);

// delete message of all field required when all inputs are filled
