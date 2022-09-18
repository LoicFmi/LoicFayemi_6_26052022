/* eslint-disable no-unused-vars */
const form = document.getElementById("form");
const modal = document.getElementById("contact-modal");

function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    form.reset();
}

function sendForm() {
    const firstname = document.querySelector(".firstname");
    const lastname = document.querySelector(".lastname");
    const email = document.querySelector(".email");
    const msg = document.querySelector(".msg");

    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(msg.value);
}