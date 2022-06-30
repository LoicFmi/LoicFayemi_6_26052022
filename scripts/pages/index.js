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

    // Penser à remplacer par les données récupérées dans le json
    
    // const photographers = [
    //     {
    //         "name": this._name,
    //         "id": 1,
    //         "city": "Paris",
    //         "country": "France",
    //         "tagline": "Ceci est ma data test",
    //         "price": 400,
    //         "portrait": "account.png"
    //     },
    // ]

    // et bien retourner le tableau photographers seulement une fois
    // return ({
    //     photographers: [...photographers, ...photographers, ...photographers]
    // })

} 

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);
    console.log(photographers)
};
init();
