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

async function displayMedia(medias, photographerName) {
    const photographMedia = document.querySelector(".photograph-media");

    medias.forEach((media) => {
        const mediaType = new MediaFactory(media, photographerName);
        const med = document.createElement('article');
        med.innerHTML = mediaType.createMedia();
        photographMedia.appendChild(med);
    });
};

async function displayPhotograph(data) {
    const photographInfos = document.querySelector(".photograph-infos");
    const photographPortrait = document.querySelector(".photograph-portrait");

    const portrait = new Photograph(data);
    photographInfos.innerHTML = portrait.createInfos();
    photographPortrait.innerHTML = portrait.createPortrait();
}

async function init() {
    // Récupération de l'id dans 'URL
    let url = window.location.href;
    const strs = url.split('=');
    const id = parseInt(strs.at(-1));

    // Récupère les infos du photographe
    const photographers = await getPhotographers();
    const photographer = photographers.find(photograph => photograph.id === id);
    displayPhotograph(photographer);

    const medias = await getMedia();
    const photographerMedias = medias.filter(media => media.photographerId === id);
    displayMedia(photographerMedias, photographer.name);
    console.log(photographerMedias);
    console.log(photographer);
};

init();