/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
class MediaFactory {
    constructor(data, photographerName) {
        if (data.hasOwnProperty('image')) {
            return new Photo(data, photographerName)
        } else if (data.hasOwnProperty('video')) {
            return new Video(data, photographerName)
        } else {
            throw 'Unknown type format'
        }
    }
}

class Photo {
    constructor(data, photographerName) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._photographerName = photographerName
    }

    createMedia() {
        return `
                <a class="photograph-media-link" onclick="displayLightbox()">
                    <img id=${this._id} class="photograph-media-content" src='../assets/photographers/${this._photographerName}/${this._image}' alt= '${this._title}'>
                    </img>
                </a>
                <div class="photograpgh-media-infos">
                    <p>${this._title}</p>
                    <p>${this._likes} <i class="fas fa-heart"></i></p>
                </div>`;
    }

    displayMedia() {
        return `
        <img id=${this._id} class="photograph-media-content" src='../assets/photographers/${this._photographerName}/${this._image}' alt= '${this._title}'>
                    </img>`
    }
}

class Video {
    constructor(data, photographerName) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._video = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._photographerName = photographerName
    }

    createMedia() {
        return `
                <a class="photograph-media-link" onclick="displayLightbox()">
                    <video id=${this._id} class="photograph-media-content" alt='${this._title}'>
                        <source src='../assets/photographers/${this._photographerName}/${this._video}' type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </a>
                <div class="photograpgh-media-infos">
                    <p>${this._title}</p>
                    <p>${this._likes} <i class="fas fa-heart"></i></p>
                </div>`;
    }
}

class Photograph {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;
    }

    createInfos() {
        return `<article>
                    <h2>${this._name}</h2>
                    <h3>${this._city}, ${this._country}</h3>
                    <h4>${this._tagline}</h4>
                </article>`;
    }

    createPortrait() {
        return `<img id=${this._id} class="photograph-portrait" src='../assets/photographers/Photographers ID Photos/${this._portrait}' alt='${this._name}'
                </img>`;
    }

    createBox() {
        return `<p>297 081 <i class="fas fa-heart"></i></p>
                <p> ${this._price}€ / jour</p>`;
    }

    addNameToModal() {
        return `${this._name}`
    }
}