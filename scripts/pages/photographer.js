// Récupérer id et média du photographer
// Récupérer objet et les médias
// Test en fixant un ID (let const id = 1)
// Get param by ID/name

async function getMedia() {

    return fetch('../data/photographers.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.media;
            // return data;
        })
        .catch(function (error) {
            console.error('Erreur fetch');
            console.log(error);
        });
} 

async function displayMedia(medias) {
    const photographMedia = document.querySelector(".photograph-media");

    medias.forEach((media) => {
        const mediaType = new MediaFactory(media);
        const image = document.createElement('article');
        image.innerHTML = mediaType.createMedia();
        // photographMedia.appendChild(mediaType.createMedia());
        photographMedia.appendChild(image);
    });
};

async function init() {
    // Récupère les medias du photographe
    const medias = await getMedia();
    displayMedia(medias);
    console.log(medias)
};
init();