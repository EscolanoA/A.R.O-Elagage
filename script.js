const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

let listOfCards = document.getElementsByClassName("card");

for (let i = 0; i < listOfCards.length; i++) {
    listOfCards[i].style.animation = `opacityanim 1s cubic-bezier(.22,.53,.51,.82) forwards`;
    listOfCards[i].style.animationDelay = `${i * 0.3}s`; // Stagger start time by 0.5s for each card
}