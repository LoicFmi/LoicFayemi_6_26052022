export class MediaFactory {
    constructor(type, data) {
        // this.createMediatype = function (type) {
        if (type === 'photo') {
            return new Photo(data)
        } else if (type === 'video') {
            return new Video(data)
        } else {
            throw 'Unknown type format'
        };
    }
    // }
}

// Séparer constructor et fonction
export class Photo {
    constructor(data) {
        this._type = 'photo';
        this._id = 'id';
        this._photographerId = 'photographerId';
        this._title = 'title';
        this._image = 'image';
        this._likes = 'likes';
        this._date = 'date';
        this._price = 'price';
    }

    createPhoto (ArrayList, photographerItem) {
        return `
            <article class='photographer-page-container'>
                <a href="" class="photographer-page-media-link">
                    <img id=${ArrayList.id} class="photographer-page-media" src='./images/${photographerItem.name.split(' ').slice(0, 1)}/${ArrayList.image}' alt=${ArrayList.alt}>
                    </img>
                </a>
            </article>`;
    }
}

export class Video {
    constructor(data) {
        this._type = 'video';
        this._id = 'id';
        this._photographerId = 'photographerId';
        this._title = 'title';
        this._video = 'video';
        this._likes = 'likes';
        this._date = 'date';
        this._price = 'price';
    }

    createVideo (ArrayList, photographerItem) {
        return `
            <article class='photographer-page-container'>
                <a href="" class="photographer-page-media-link">
                <video id=${ArrayList.id} class='photographer-page-media'>
                    <source src='./images/${photographerItem.name.split(' ').slice(0, 1)}/${ArrayList.video}' type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                </a>
            </article>`;
    }
}