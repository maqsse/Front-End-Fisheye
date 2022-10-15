// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
    const { name, portrait, id, tagline, city, country, price } = data;

    const picture = `assets/SamplePhotos/PhotographersIDPhotos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' );
        const pCity = document.createElement('p');
        pCity.setAttribute("id", "pcity");
        const pTagline = document.createElement('p');
        pTagline.setAttribute("id", "ptagline");
        const pPrice = document.createElement('p');
        pPrice.setAttribute("id", "pprice");
        const lienPagePhotographer = document.createElement('a');
        pTagline.textContent = tagline;
        pCity.textContent = city+", "+country;
        h2.textContent = name;
        pPrice.textContent = price+"€/"+"jour";
        lienPagePhotographer.setAttribute("href", "photographer.html?id="+id);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pCity);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        lienPagePhotographer.appendChild(article);
        return (lienPagePhotographer);
    }
    return { name, picture,id, tagline, city, price, getUserCardDOM }
}