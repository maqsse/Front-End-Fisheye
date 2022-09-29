//Mettre le code JavaScript lié à la page photographer.html
//affichage des données photographes
 async function getPhotographers() {
    const idPage = window.location.search.split('id=')[1];
        const data = await fetch('./data/photographers.json')
		.then((res) => res.json());
          for (let i = 0; i < data.photographers.length; i++) {
             const idPhotographer = data.photographers[i].id;
            if(idPage == idPhotographer){
                //affichage des infos photographes
                const blocPhotographer = document.querySelector(".photograph-header");
                const infosPhotographer = document.createElement("div");
                const pricePerDay = document.querySelector(".pricePerDay");
                const userPrice = document.createTextNode(data.photographers[i].price);

                blocPhotographer.appendChild(infosPhotographer);
                const namePhotographer = document.createElement("p");
                namePhotographer.textContent = data.photographers[i].name;
                infosPhotographer.appendChild(namePhotographer);
                const cityCountryPhotographer = document.createElement("p");
                cityCountryPhotographer.innerHTML=data.photographers[i].city+","+data.photographers[i].country;
                infosPhotographer.appendChild(cityCountryPhotographer);
                const taglinePhotographer = document.createElement("p");
                taglinePhotographer.textContent=data.photographers[i].tagline;
                infosPhotographer.appendChild(taglinePhotographer);
                const imgPhotographer = document.createElement("img");
                imgPhotographer.setAttribute("id", "imgphotographer");
                imgPhotographer.setAttribute("src","assets/SamplePhotos/PhotographersIDPhotos/"+data.photographers[i].portrait);
                infosPhotographer.appendChild(imgPhotographer);
pricePerDay.insertBefore(userPrice, pricePerDay.firstChild);

// Affiche le nom du photographe dans la page contact
         
    document.querySelector(".modal header>h2").textContent = data.photographers[i].name;
    document.querySelector(".modal header>h2").setAttribute("arial-label","Contact me" +data.photographers[i].name);
}
                
            }

           return (data.photographers); 
         }
         
        
         
    
   getPhotographers(); 

// récupération des données médias 
async function getMedia() {
    
    const media = await fetch('./data/photographers.json')
    .then((res) => res.json());
     return  media;


     
};



async function displayData(media) {
        const mediaSection = document.querySelector(".photograph-work");

for (let i = 0; i < media.length; i++) {

     const idPage = window.location.search.split('id=')[1];
     const element = media[i];
     
     if( idPage == element.photographerId){
        
            const mediaModel = mediaFactory(element);
               const userCardMedia = mediaModel.getUserWorkDOM();
              mediaSection.appendChild(userCardMedia);
             
 }

 }


}


// likes

    function like(event){
     const target = event.currentTarget;
    if (!target.hasAttribute('liked')) {
    target.setAttribute('liked','');
    target.querySelectorAll(".number-likes").textContent = parseInt(target.textContent)+1;
    updateTotalLikes();
    }
    }


async function updateTotalLikes() {
    const pictures = document.querySelector(".photograph-work");
    const likes = pictures.querySelectorAll(".number-likes");
    const totalLikesNumber = document.querySelector(".totalLikesNumber");
    let totalLikes=0;
    likes.forEach(like => totalLikes += parseInt(like.textContent));
    totalLikesNumber.textContent = totalLikes;
}
//initialisation de la page
   async function init() {
    const {  media } = await getMedia();
         displayData(media);
         updateTotalLikes();
         
         
}
init();

