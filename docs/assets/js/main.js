"use strict";console.log(">> Ready :)"),console.log("collapse"),console.log("color"),console.log("preview");const name=document.getElementById("name"),cardName=document.querySelector(".card__name"),job=document.getElementById("job"),cardJob=document.querySelector(".card__job");function defaultName(){const e=name.value;cardName.innerHTML=""===e?"Nombre Apellido":e}function defaultJob(){const e=job.value;cardJob.innerHTML=""===e?"Front-end developer":e}name.addEventListener("keyup",defaultName),job.addEventListener("keyup",defaultJob);