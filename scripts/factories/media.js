function mediaFactory(data){
    const { id, photographerID, title, image, likes, date, price } = data;
    const picture = `assets/SamplePhotos/PhotographersIDPhotos/${image}`;

function getUserMedia() {
        
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        
        article.appendChild(img);
        article.appendChild(h2);
        h2.textContent = title;
        return (article);
    }
    return { id, photographerID, title, image, likes, date, price, getUserMedia }

}