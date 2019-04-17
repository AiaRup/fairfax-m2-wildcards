'use strict';

//Load localStorage's data
function reload() {
  const infoLocal = getData();

  if(infoLocal !== null) {
    //Show info in inputs
    for(let property in infoLocal){
      console.log(infoLocal);
      if (infoLocal.hasOwnProperty(property)) {
        
       
        if(property !== 'photo' || property !== 'palette'){
          const input = document.querySelector(`#${property}`);
          input.value=infoLocal[property];
        }else {
          if (infoLocal.photo !== '') {
            profileImage.style.backgroundImage = `url(${infoLocal.photo})`;
            profilePreview.style.backgroundImage = `url(${infoLocal.photo})`;
          }
        }
      }
    }
    //Show info in card
  }
  console.log(infoLocal);

}
//localStorage tiene que mostrarse en los inputs del formulario
//mostrarse en la previewCard
//input#name.fill__field

window.addEventListener('load',reload);