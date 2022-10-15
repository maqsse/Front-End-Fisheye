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
                namePhotographer.setAttribute("id", "p1");
                namePhotographer.textContent = data.photographers[i].name;
                infosPhotographer.appendChild(namePhotographer);
                const cityCountryPhotographer = document.createElement("p");
                cityCountryPhotographer.setAttribute("id", "p2");
                cityCountryPhotographer.innerHTML=data.photographers[i].city+", "+data.photographers[i].country;
                infosPhotographer.appendChild(cityCountryPhotographer);
                const taglinePhotographer = document.createElement("p");
                taglinePhotographer.setAttribute("id", "p3");
                taglinePhotographer.textContent=data.photographers[i].tagline;
                infosPhotographer.appendChild(taglinePhotographer);
                const imgPhotographer = document.createElement("img");
                imgPhotographer.setAttribute("alt", data.photographers[i].name  );
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
}


// Affiche les images et vidéos du photographe
async function displayData(media) {
        const mediaSection = document.querySelector(".photograph-work");

for (let i = 0; i < media.length; i++) {

     const idPage = window.location.search.split('id=')[1];
     const element = media[i];
     
     if( idPage == element.photographerId){
        
            // eslint-disable-next-line no-undef
            const mediaModel = mediaFactory(element);
               const userCardMedia = mediaModel.getUserWorkDOM();
              mediaSection.appendChild(userCardMedia);
             
 }
 }
}


// likes
    // eslint-disable-next-line no-unused-vars
    function like(event){
     const target = event.currentTarget;

    if (!target.hasAttribute('liked')) {
    target.setAttribute('liked','');
    target.querySelector(".number-likes").textContent = parseInt(target.textContent)+1;

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


//filtre
// eslint-disable-next-line no-unused-vars
function dropdown(event) {
    const button = event.currentTarget;
    const dropdown = button.parentNode;
    dropdown.classList.toggle('dropdown-open');
    if (dropdown.classList.contains('dropdown-open')) {
        button.setAttribute('aria-expanded', true);
    } else {
        button.setAttribute('aria-expanded', false);
    }
    
    setTimeout( () => button.focus() , 50);
}

    


// eslint-disable-next-line no-unused-vars
function selectDropdownOption(event) {
    const target = event.currentTarget;
    const option = target.dataset.value;
    const dropdownList = target.parentNode;
    const dropdown = target.parentNode.parentNode;
    const button = dropdown.querySelector("button");

    const currentDropdown = dropdown.querySelectorAll(".dropdown-hide");
    for (let i = 0; i < currentDropdown.length; i++) {
        currentDropdown[i].classList.remove("dropdown-hide");
        currentDropdown[i].setAttribute("aria-selected","false");
    }
    
    target.classList.add("dropdown-hide");
    target.setAttribute("aria-selected","true");

    dropdown.dataset.value = option;
    dropdown.querySelector('button').textContent = dropdown.querySelector(`[data-value=${option}]`).textContent;

    dropdown.classList.toggle('dropdown-open');
    if (dropdown.classList.contains('dropdown-open')) {
        button.setAttribute('aria-expanded', true);
    } else {
        button.setAttribute('aria-expanded', false);
    }
    dropdownList.setAttribute("aria-activedescendant",target.id);

    orderWork();
    setTimeout( () => dropdown.querySelector('button').focus() , 50);
    
}

function orderWork() {
    const photographWork = document.querySelector(".photograph-work");
    let contentNodes = document.querySelectorAll('.thumb-imgfull');
    const order = document.querySelector(".dropdown").dataset.value;
    // Converti en tableau
    let content = Array.prototype.slice.call(contentNodes);
    
    switch (order) {
        case "popularity":
            // ordre décroissant
            content.sort(
                function(item, nextItem){
                    let firstNumber = parseInt(item.querySelector(".number-likes").textContent);
                    let secondNumber = parseInt(nextItem.querySelector(".number-likes").textContent);
                    return secondNumber - firstNumber;
                }
            )
            break;
            case "date":
            // De + à -
            content.sort(
                function(item, nextItem){
                    let firstString = item.querySelector("[data-date]").dataset.date;
                    let secondString = nextItem.querySelector("[data-date]").dataset.date;
                    return secondString.localeCompare(firstString);
                }
            )
            break;
            case "title":
            // De A à B
            content.sort(
                function(item, nextItem){
                    let firstString = item.querySelector(".thumb-imgfull>:nth-child(2)").textContent.toLowerCase();
                    let secondString = nextItem.querySelector(".thumb-imgfull>:nth-child(2)").textContent.toLowerCase();
                    return firstString.localeCompare(secondString);
                }
            )
            break;
        default:
            break;
    }

    photographWork.innerHTML = "";
    content.forEach(item => photographWork.appendChild(item));
}
//initialisation de la page
async function init() {
    // Récupère les données des photographes avant de charger le reste des fonctions
    const {  media } = await getMedia();
         displayData(media);
         updateTotalLikes();
         orderWork();
         
}
init();