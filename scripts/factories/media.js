class MediaFactory {
    constructor(data, photographerName) {
        if (data.hasOwnProperty('image')) {
            return new Photo(data, photographerName)
        } else if (data.hasOwnProperty('video')) {
            return new Video(data, photographerName)
        } else {
            throw 'Unknown type format'
        };
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
                <a href="" class="photograph-media-link">
                    <img id=${this._id} class="photograph-media-content" src='../assets/photographers/${this._photographerName}/${this._image}' alt= ''>
                    </img>
                </a>`;
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
                <a href="" class="photograph-media-link">
                <video id=${this._id} class='photograph-media-content'>
                    <source src='../assets/photographers/${this._photographerName}/${this._video}' type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                </a>`;
    }
}