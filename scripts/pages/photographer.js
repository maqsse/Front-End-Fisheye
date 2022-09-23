//Mettre le code JavaScript lié à la page photographer.html
async function getMedia() {
    // Penser à remplacer par les données récupérées dans le json
    const media = await fetch('./data/photographers.json')
    .then((res) => res.json());
    
     return (media);
};
async function displayData(media) {
        const mediaSection = document.querySelector("#main");
        
for (let i = 0; i < media.length; i++) {
    const idPage = window.location.search.split('id=')[1];
    const element = media[i];
    if( idPage == element.photographerId){
    const mediaModel = mediaFactory(element);
              const userCardMedia = mediaModel.getUserMedia();
             mediaSection.appendChild(userCardMedia);
}
}
}
async function init() {
// Objets JSON
    const { media } = await getMedia();
              
    displayData(media);
}
init();
