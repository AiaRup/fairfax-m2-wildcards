'use strict';

const saveData = () => {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

const getData = () => {
  return JSON.parse(localStorage.getItem('userProfile'));
}

const removeData = () => {
  localStorage.removeItem('userProfile');
}
