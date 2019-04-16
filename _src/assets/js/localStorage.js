'use strict';

//Save object in localStorage

function saveData() {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function getData() {
  return JSON.parse(localStorage.getItem('userProfile'));
}

function dataLocal() {
  const up = localStorage.getItem('userProfile');
  if(up === null ) {
    function place(){
      return JSON.parse(localStorage.getItem('defaultUser'));
    }
    place();

    console.log(place());

  } else {
    userProfile = getData();
    return cardPreview;
  }
}


// const defaultUser = {
//   name: 'nombre apellido',
//   job: 'Front-end developer',
//   photo: imageUrlBase,
//   palette: 1,
//   email: '',
//   phone: '',
//   linkedin: '',
//   github: '',
// };


dataLocal();

// if local storage is empty
// userProfile = userDefault;
// saveData();

// else
// userProfile = getData();
// update previewcard
// update inputs