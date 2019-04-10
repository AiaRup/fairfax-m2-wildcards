'use strict';

const fill__fields = document.querySelectorAll('.fill__field');
const reset__button = document.querySelector('.preview__button');
const card__name = document.querySelector('.card__name');
const card__job = document.querySelector('.card__job');
const icons = document.querySelectorAll('.card__link-sm');

function resetPreview() {
    for (const input of fill__fields){
        input.value='';
    }
    for (const icon of icons){
        if(!icon.classList.contains('hidden')){
            icon.classList.add('hidden');
        }
    }
    card__name.innerHTML='nombre apellido';
    card__job.innerHTML='Front-end developer'
}

reset__button.addEventListener('click', resetPreview);
