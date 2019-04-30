'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * @param {evento} e
 */
function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

const changeImages = photo => {
  profileImage.style.backgroundImage = `url(${photo})`;
  profilePreview.style.backgroundImage = `url(${photo})`;

  for (const image of fakeImages) {
    image.src = photo;
    image.alt = 'Imagen de perfil';
  }
}

function writeImage() {
  changeImages(fr.result);
  userProfile.photo = fr.result;
  imageContainer.classList.remove('error');
  startOver();
  saveData();
}

function fakeFileClick() {
  fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
