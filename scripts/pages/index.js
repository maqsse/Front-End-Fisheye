    async function getPhotographers() {
        // Récupère les données des photographes depuis le fichier JSON
         const photographers = await fetch('./data/photographers.json')
		.then((res) => res.json());
    return (photographers);
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            // eslint-disable-next-line no-undef
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les données des photographes pour ensuite les insérer dans index.html
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    