/* eslint-disable no-inner-declarations */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
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

// Récupère le nom du photographe
async function photographerName() {
    // Récupération de l'id du photographe dans 'URL
    let url = window.location.href;
    const strs = url.split('=');
    const id = parseInt(strs.at(-1));

    // Récupère les infos du photographe
    const photographers = await getPhotographers();
    const photographer = photographers.find(photograph => photograph.id === id);

    return photographer;
}
photographerName();

// Récupère les medias du photographe
async function mediasArray() {
    // Récupération de l'id du photographe dans 'URL
    let url = window.location.href;
    const strs = url.split('=');
    const id = parseInt(strs.at(-1));

    // Récupère les images et vidéos du photographe
    const medias = await getMedia();
    const photographerMedias = medias.filter(media => media.photographerId === id);

    return photographerMedias;
}

// Index du tableau des médias
let i;

// Affiche le média précédent dans la lightbox
async function previousMedia() {

    let photograph = await photographerName();
    const photographer = photograph.name;

    let media;
    let mediaArray = await mediasArray();

    if (i > 0) {

        i = i - 1;
        if (mediaArray[i].hasOwnProperty('image')) {
            media = mediaArray[i].image;
        } else if (mediaArray[i].hasOwnProperty('video')) {
            media = mediaArray[i].video;
        }

        const mediaBox = document.querySelector(".media-box");

        // Récupère l'extension du média
        function getFileExtension(fileName) {
            return fileName.split('.').pop();
        }
        let ext = getFileExtension(media);

        if (ext == 'jpg' || ext == 'png' || ext == 'gif') {

            mediaBox.innerHTML = `<img id=${mediaArray[i].id} class="lightbox-media" src='../assets/photographers/${photographer}/${media}' alt= '${mediaArray[i].title}'></img>
        <p>${mediaArray[i].title}</p>
        </div>
        `

        } else if (ext == 'mp4') {

            mediaBox.innerHTML = `<video id=${mediaArray[i].id} class="lightbox-media" alt='${mediaArray[i].title}' controls autoplay loop>
        <source src='../assets/photographers/${photographer}/${media}' type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <p>${mediaArray[i].title}</p>`

        } else {
            console.error('Wrong format type');
            // console.log(error);
        }
    }
}

// Affiche le média suivant dans la lightbox
async function nextMedia() {

    let photograph = await photographerName();
    const photographer = photograph.name;

    let media;
    let mediaArray = await mediasArray();
    let length = mediaArray.length - 1;

    if (i < length) {

        i = i + 1;

        if (mediaArray[i].hasOwnProperty('image')) {
            media = mediaArray[i].image;
        } else if (mediaArray[i].hasOwnProperty('video')) {
            media = mediaArray[i].video;
        }

        const mediaBox = document.querySelector(".media-box");

        // Récupère l'extension du média
        function getFileExtension(fileName) {
            return fileName.split('.').pop();
        }
        let ext = getFileExtension(media);

        if (ext == 'jpg' || ext == 'png' || ext == 'gif') {

            mediaBox.innerHTML = `<img id=${mediaArray[i].id} class="lightbox-media" src='../assets/photographers/${photographer}/${media}' alt= '${mediaArray[i].title}'></img>
            <p>${mediaArray[i].title}</p>
            </div>
            `

        } else if (ext == 'mp4') {

            mediaBox.innerHTML = `<video id=${mediaArray[i].id} class="lightbox-media" alt='${mediaArray[i].title}' controls autoplay loop>
            <source src='../assets/photographers/${photographer}/${media}' type="video/mp4">
            Your browser does not support the video tag.
            </video>
            <p>${mediaArray[i].title}</p>`

        } else {
            console.error('Wrong format type');
            // console.log(error);
        }
    }
}

const lightbox = document.getElementById("lightbox-container");

let mediaId;

// Ouvre la lightbox et affiche le média qui a été cliqué
async function displayLightbox(clicked_id, clicked_photograph, clicked_media, clicked_title) {

    lightbox.style.display = "block";

    const mediaBox = document.querySelector(".media-box");
    const main = document.getElementById("main");
    const body = document.getElementById("body");
    const lightBox = document.getElementById("lightbox-container");

    main.setAttribute('aria-hidden', 'true');
    lightBox.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';

    function getFileExtension(fileName) {
        return fileName.split('.').pop();
    }

    // Récupère l'extension du média
    let ext = getFileExtension(clicked_media);

    // Créé une image ou une vidéo en fonction de l'extension récupérée
    if (ext == 'jpg' || ext == 'png' || ext == 'gif') {

        mediaBox.innerHTML = `<img id=${clicked_id} class="lightbox-media" src='../assets/photographers/${clicked_photograph}/${clicked_media}' alt= '${clicked_title}'></img>
        <p>${clicked_title}</p>
        </div>`

    } else if (ext == 'mp4') {

        mediaBox.innerHTML = `<video id=${clicked_id} class="lightbox-media" alt='${clicked_title}' controls autoplay loop>
        <source src='../assets/photographers/${clicked_photograph}/${clicked_media}' type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <p>${clicked_title}</p>`

    } else {
        console.error('Wrong format type');
        // console.log(error);
    }

    const lightBoxMedia = document.querySelector(".lightbox-media");
    mediaId = lightBoxMedia.id;
    let mediaArray = await mediasArray();
    const mediaIndex = mediaArray.findIndex(object => {
        return object.id == mediaId;
    });

    i = mediaIndex;
}

// Ferme la lightbox
function closeLightbox() {
    lightbox.style.display = "none";

    const main = document.getElementById("main");
    const body = document.getElementById("body");
    const lightBox = document.getElementById("lightbox-container");
    const media = document.querySelector(".photograph-media-content");

    main.setAttribute('aria-hidden', 'false');
    lightBox.setAttribute('aria-hidden', 'true');
    body.style.overflow = 'auto';
    media.focus();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
    if (e.key === 'ArrowRight') {
        nextMedia();
    }
    if (e.key === 'ArrowLeft') {
        previousMedia();
    }
})