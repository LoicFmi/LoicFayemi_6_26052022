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
        this._type           = data.image;
        this._id             = data.id;
        this._photographerId = data.photographerId;
        this._title          = data.title;
        this._image          = data.image;
        this._likes          = data.likes;
        this._date           = data.date;
        this._price          = data.price;
        this._name           = data.name;
    }

    // createMedia() {
    //     return `
    //         <article class='photographer-page-container'>
    //             <a href="" class="photographer-page-media-link">
    //                 <img id=${this._id} class="photographer-page-media" src='../assets/photographers/${photographerItem.name.split(' ').slice(0, 1)}/${ArrayList.image}' alt=${ArrayList.alt}>
    //                 </img>
    //             </a>
    //         </article>`;
    // }

    createMedia() {
    //     return `
    //         <article class='photographer-page-container'>
    //             <a href="" class="photographer-page-media-link">
    //                 <img id=${this._id} class="photographer-page-media" src='../assets/photographers/${this._name}/${this._image}' alt= ''>
    //                 </img>
    //             </a>
    //         </article>`;
    // }
        return `
                <a href="" class="photograph-media-link">
                    <img id=${this._id} class="photograph-media-content" src='../assets/photographers/Tracy Galindo/${this._image}' alt= ''>
                    </img>
                </a>`;
    }
}

class Video {
    constructor(data) {
        this._type           = data.video;
        this._id             = data.id;
        this._photographerId = data.photographerId;
        this._title          = data.title;
        this._video          = data.video;
        this._likes          = data.likes;
        this._date           = data.date;
        this._price          = data.price;
        this._name           = data.name;
    }

    // createMedia() {
    //     return `
    //         <article class='photograph-media-container'>
    //             <a href="" class="photograph-media-link">
    //             <video id=${this._id} class='photograph-media-content'>
    //                 <source src='./images/${photographerItem.name.split(' ').slice(0, 1)}/${ArrayList.video}' type="video/mp4">
    //                 Your browser does not support the video tag.
    //             </video>
    //             </a>
    //         </article>`;
    // }
}