"use strict";

const createBtn = document.querySelector(".share__button-create");
const url = "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card";
const urlTwitter =
  "https://twitter.com/intent/tweet?text=I%20created%20in%20awesome%20profile-cards%20http://beta.adalab.es/fairfax-m2-wildcards/%20my%20business%20card%20";
const shareButtonTwitter = document.querySelector(".share__button-twitter");

const postData = () => {
  console.log("user", userProfile);
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(userProfile)
  })
    .then(response => response.json())
    .then(result => {
      console.log("result", result);
      // Añadir url para twitter
      const finalURL = urlTwitter + result.cardURL;
      shareButtonTwitter.href = finalURL;
    })
    .catch(error => console.log("error", error));
};

createBtn.addEventListener("click", postData);

// hide the share section
// if all fields are valid
// div for errors
// class for input with errors
