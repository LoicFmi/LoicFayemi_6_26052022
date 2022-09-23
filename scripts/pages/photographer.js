/* eslint-disable no-undef */
// Récupération des infos du photographe
async function getPhotographers() {

    return fetch('../data/photographers.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.photographers;
        })
        .catch(function (error) {
            console.error('Erreur fetch');
            console.log(error);
        });
}

// Récupération des médias du photographe
async function getMedia() {

    return fetch('../data/photographers.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.media;
        })
        .catch(function (error) {
            console.error('Erreur fetch');
            console.log(error);
        });
}

// Affichage des infos du photographe
async function displayPhotograph(data) {
    const photographInfos = document.querySelector(".photograph-infos");
    const photographPortrait = document.querySelector(".photograph-portrait");
    const modalName = document.createElement('h2');
    const modalHeader = document.querySelector(".modal-name");
    const header = new Photograph(data);

    photographInfos.innerHTML = header.createInfos();
    photographPortrait.innerHTML = header.createPortrait();
    modalName.innerHTML = header.addNameToModal();
    modalHeader.appendChild(modalName);
}

// Affichage des médias du photographe
async function displayMedia(medias, photographerName) {
    const photographMedia = document.querySelector(".photograph-media");

    medias.forEach((media) => {
        const mediaType = new MediaFactory(media, photographerName);
        const med = document.createElement('article');
        med.innerHTML = mediaType.createMedia();
        photographMedia.appendChild(med);
    });
}

// Affichage de la box en bas de page
async function displayBox(data) {
    const photographBox = document.querySelector(".photograph-box");
    const box = new Photograph(data);

    photographBox.innerHTML = box.createBox();
}

// Génère la page photographe
async function init() {
    // Récupération de l'id du photographe dans 'URL
    let url = window.location.href;
    const strs = url.split('=');
    const id = parseInt(strs.at(-1));

    // Récupère les infos du photographe
    const photographers = await getPhotographers();
    const photographer = photographers.find(photograph => photograph.id === id);

    // Affiche les infos du photographe sur la page
    displayPhotograph(photographer);

    // Affiche la box du photographe en bas de la page
    displayBox(photographer);

    // Récupère les images et vidéos du photographe
    const medias = await getMedia();
    const photographerMedias = medias.filter(media => media.photographerId === id);

    // Affiche les médias du photographe sur la page
    displayMedia(photographerMedias, photographer.name);
}

init();

