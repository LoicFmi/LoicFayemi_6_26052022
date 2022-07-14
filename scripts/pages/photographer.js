async function getPhotographers() {

    return fetch('../data/photographers.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.photographers);
            return data.photographers;
        })
        .catch(function (error) {
            console.error('Erreur fetch');
            console.log(error);
        });
}

async function displayData(photographers) {
    const photographHeader = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        const photographerModel = photographFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographHeader.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);
    console.log(photographers)
};
init();


// Media
