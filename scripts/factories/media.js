// class MediaFactory {
//     constructor(type, data) {
//         if (type === 'photo') {
//             return new Photo(data)
//         } else if (type === 'video') {
//             return new Video(data)
//         } else {
//             throw 'Unknown type format'
//         };
//     }
// }

class MediaFactory {
    constructor(data) {
        if (data.hasOwnProperty('image')) {
            return new Photo(data)
        } else if (data.hasOwnProperty('video')) {
            return new Video(data)
        } else {
            throw 'Unknown type format'
        };
    }
}

class Photo {
    constructor(data) {
        this._type           = data.photo;
        this._id             = data.id;
        this._photographerId = data.photographerId;
        this._title          = data.title;
        this._image          = data.image;
        this._likes          = data.likes;
        this._date           = data.date;
        this._price          = data.price;
    }

    createMedia() {
        return `
            <article class='photographer-page-container'>
                <a href="" class="photographer-page-media-link">
                    <img id=${this._id} class="photographer-page-media" src='./images/${photographerItem.name.split(' ').slice(0, 1)}/${ArrayList.image}' alt=${ArrayList.alt}>
                    </img>
                </a>
            </article>`;
    }
}

class Video {
    constructor(data) {
        this._type           = data.photo;
        this._id             = data.id;
        this._photographerId = data.photographerId;
        this._title          = data.title;
        this._video          = data.video;
        this._likes          = data.likes;
        this._date           = data.date;
        this._price          = data.price;
    }

    createMedia() {
        return `
            <article class='photographer-page-container'>
                <a href="" class="photographer-page-media-link">
                <video id=${this._id} class='photographer-page-media'>
                    <source src='./images/${photographerItem.name.split(' ').slice(0, 1)}/${ArrayList.video}' type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                </a>
            </article>`;
    }
}