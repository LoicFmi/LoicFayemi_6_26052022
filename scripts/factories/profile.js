function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const a = document.createElement('a');
        a.setAttribute("href", 'photographer.html');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        const p = document.createElement('p');
        p.textContent = price + '€/jour';
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return (article);
    }
    return { getUserCardDOM }
}


// Page photographer
// function photographFactory(data) {
//     const { name, portrait, city, country, tagline, price, id } = data;

//     const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

//     function getUserCardDOM() {
//         const div = document.querySelector('.photograph-header')
//         const article = document.createElement('article');
//         // const a = document.createElement('a');
//         // a.setAttribute("href", 'photographer.html');
//         const h2 = document.createElement('h2');
//         h2.textContent = name;
//         const h3 = document.createElement('h3');
//         h3.textContent = city + ', ' + country;
//         const h4 = document.createElement('h4');
//         h4.textContent = tagline;
//         const img = document.createElement('img');
//         img.setAttribute("src", picture);
//         // const p = document.createElement('p');
//         // p.textContent = price + '€/jour';
//         // article.appendChild(a);
//         // a.appendChild(img);
//         article.appendChild(h2);
//         article.appendChild(h3);
//         article.appendChild(h4);
//         // article.appendChild(p);
//         div.prepend(article);
//         div.appendChild(img);
//         // return (article);
//     }
//     return { getUserCardDOM }
// }