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
        this._media = data.image;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._photographerName = photographerName
    }

    createMedia() {
        return `
                <a class="photograph-media-link" href="#" role="button" tabindex="0" onclick="displayLightbox(${this._id}, '${this._photographerName}', '${this._media}', '${this._title}'); return false">
                    <img id=${this._id} class="photograph-media-content" src='../assets/photographers/${this._photographerName}/${this._media}' alt= '${this._title}'>
                    </img>
                </a>
                <div class="photograpgh-media-infos">
                    <p>${this._title}</p>
                    <p class="likes"><span class="likes-number ${this._id}" tabindex="0">${this._likes}</span> <a class="fas fa-heart" href ="#" role="button" tabindex="0" onclick="addOneLike(${this._id}, ${this._likes}); return false"></a></p>
                </div>`;
    }

}

class Video {
    constructor(data, photographerName) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._media = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._photographerName = photographerName
    }

    createMedia() {
        return `
                <a class="photograph-media-link" href="#" role="button" tabindex="0" onclick="displayLightbox(${this._id}, '${this._photographerName}', '${this._media}', '${this._title}'); return false">
                    <video id=${this._id} class="photograph-media-content" alt='${this._title}'>
                        <source src='../assets/photographers/${this._photographerName}/${this._media}' type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </a>
                <div class="photograpgh-media-infos">
                    <p>${this._title}</p>
                    <p class="likes"><span class="likes-number ${this._id}" tabindex="0">${this._likes}</span> <a class="fas fa-heart" href="#" role="button" tabindex="0" onclick="addOneLike(${this._id}, ${this._likes}); return false"></a></p>
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
        return `<p><span id="total-likes"></span> <i class="fas fa-heart"></i></p>
                <p> ${this._price}€ / jour</p>`;
    }

    addNameToModal() {
        return `${this._name}`
    }
}