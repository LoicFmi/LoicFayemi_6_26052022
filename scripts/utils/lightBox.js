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

async function photographerName() {
    let url = window.location.href;
    const strs = url.split('=');
    const id = parseInt(strs.at(-1));

    const photographers = await getPhotographers();
    const photographer = photographers.find(photograph => photograph.id === id);

    return photographer;
}

photographerName();

async function mediasArray() {
    let url = window.location.href;
    const strs = url.split('=');
    const id = parseInt(strs.at(-1));

    const medias = await getMedia();
    const photographerMedias = medias.filter(media => media.photographerId === id);

    return photographerMedias;

}

mediasArray();

let i;

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
            console.log(error);
        }
    }

}

async function nextMedia() {

    let photograph = await photographerName();
    const photographer = photograph.name;

    let media;
    let mediaArray = await mediasArray();

    if (i < 9) {

        i = i + 1;

        if (mediaArray[i].hasOwnProperty('image')) {
            media = mediaArray[i].image;
        } else if (mediaArray[i].hasOwnProperty('video')) {
            media = mediaArray[i].video;
        }

        const mediaBox = document.querySelector(".media-box");

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
            console.log(error);
        }
    }

}


const lightbox = document.getElementById("lightbox-container");

let mediaId;

async function displayLightbox(clicked_id, clicked_photograph, clicked_media, clicked_title) {
    lightbox.style.display = "block";

    const mediaBox = document.querySelector(".media-box");

    function getFileExtension(fileName) {
        return fileName.split('.').pop();
    }

    let ext = getFileExtension(clicked_media);

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
        console.log(error);
    }

    const lightBoxMedia = document.querySelector(".lightbox-media");
    mediaId = lightBoxMedia.id;
    let mediaArray = await mediasArray();
    const mediaIndex = mediaArray.findIndex(object => {
        return object.id == mediaId;
    });

    console.log(mediaId);
    console.log(mediaIndex);
    i = mediaIndex;
}


function closeLightbox() {
    lightbox.style.display = "none";
}
