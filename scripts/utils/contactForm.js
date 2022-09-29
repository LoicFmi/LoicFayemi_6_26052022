/* eslint-disable no-unused-vars */
const form = document.getElementById("form");
const modal = document.getElementById("contact-modal");
const main = document.getElementById("main");
const body = document.getElementById("body");
const modalOpenBtn = document.querySelector(".contact-button");
const firstname = document.getElementById("firstname");

// Gère l'accessibilité à l'ouverture de la modale
const openingModal = () => {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
}

// Gère l'accessibilité à la fermeture de la modale
const closingModal = () => {
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    body.style.overflow = 'auto';
    modalOpenBtn.focus();
}

// Ouvre la modale
function displayModal() {
    modal.style.display = "block";
    openingModal();
    firstname.focus();
}

// Ferme la modale
function closeModal() {
    modal.style.display = "none";
    form.reset();
    closingModal();
}

// Envoi les infos du formulaire (pour l'instant fait un console.log de ces infos)
function sendForm() {
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const msg = document.querySelector("#message");

    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(msg.value);

    form.reset();
}

// Ferme la modale à l'appui sur la touche Echap
modal.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
})