const lightbox = document.getElementById("lightbox-container");

async function displayLightbox(clicked_id, clicked_photograph, clicked_media, clicked_title) {
    lightbox.style.display = "block";

    const mediaBox = document.querySelector(".media-box");

    function getFileExtension(fileName) {
        return fileName.split('.').pop();
    }

    let ext = getFileExtension(clicked_media);

    if (ext == 'jpg' || ext == 'png' || ext == 'gif') {

        mediaBox.innerHTML = `<img id=${clicked_id} class="lightbox-media" src='../assets/photographers/${clicked_photograph}/${clicked_media}' alt= '${clicked_title}'></img>
        <p>${clicked_title}</p>`

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
}

function closeLightbox() {
    lightbox.style.display = "none";
}