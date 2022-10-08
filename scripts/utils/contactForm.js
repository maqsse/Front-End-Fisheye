
function displayModal() {
    const modal = document.getElementById("contact_modal");
    tabindexSet(-1);
	modal.classList.add("modal-show");
    modal.querySelector("img").focus();

    IsFormContactKeyListenerActive = true;
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    tabindexSet(0);
	modal.classList.remove("modal-show");
    setTimeout( () => document.querySelector("main .contact_button").focus() , 50);
    IsFormContactKeyListenerActive = false;
}

let IsFormContactKeyListenerActive = false;
document.addEventListener( 'keydown',
    function (event) {
        if (event.key === "Escape") {
            IsFormContactKeyListenerActive ? closeModal() : undefined;
        }
    }
);
function getFormData() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let yourMessage = document.getElementById("yourMessage").value;
    let data = {firstName, lastName, email, yourMessage};
    resetFormData();

    return data;
}

function resetFormData() {
    document.getElementById("firstName").value   =
    document.getElementById("lastName").value    =
    document.getElementById("email").value       =
    document.getElementById("yourMessage").value = '';
}

function sendForm(event) {
    event.preventDefault();

    console.log(getFormData());
    // Envoyer les données au photographe 

    closeModal();
    return false;
}
