'use strict';
const themes = ['theme1', 'theme2', 'theme3'];
const radioButtons = document.querySelectorAll('input[type="radio"]');

const updatePaletteOnLoad = storagePalette => {
  cardPreview.classList.remove(...themes);
  cardPreview.classList.add(`theme${storagePalette}`);
  for (const radio of radioButtons) {
    if (parseInt(radio.dataset['theme']) === storagePalette) {
      radio.checked = true;
    } else {
      radio.checked = false;
    }
  }
}

const updateImageOnLoad = img => {
  changeImages(img);
}

const updateTextAndLinks = (userProp, localData, input) => {
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

const reload = () => {
  const infoLocal = getData();
  if (infoLocal !== null) {
    userProfile = infoLocal;
    for (let property in infoLocal) {
      const currentProp = infoLocal[property];
      if (
        property !== 'photo' &&
        property !== 'palette' &&
        currentProp !== ''
      ) {
        const input = document.querySelector(`#${property}`);
        input.value = currentProp;
        updateTextAndLinks(property, currentProp, input);
      } else {
        if (property === 'palette') {
          updatePaletteOnLoad(currentProp);
        }
        if (infoLocal.photo !== '' && property === 'photo') {
          const { photo: img } = infoLocal;
          updateImageOnLoad(img);
        }
      }
    }
  }
}

window.addEventListener('load', reload);
