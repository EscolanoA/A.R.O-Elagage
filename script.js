const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



let servicescontainer = document.getElementById("servicescontainer")

let tailles = document.getElementById("taillescontainer")
let abattage = document.getElementById("abattagecontainer")
let haubanage = document.getElementById("haubanagecontainer")
let broyage = document.getElementById("broyagecontainer")
let entretien = document.getElementById("entretiencontainer")

let navbartailles = document.getElementById("tailles")
let navbarabattage = document.getElementById("abattage")
let navbarhaubanage = document.getElementById("haubanage")
let navbarbroyage = document.getElementById("broyage")
let navbarentretien = document.getElementById("entretien")

animatecards()

function animatecards() {
    let listOfElements = document.getElementsByClassName("popanimate");

    for (let i = 0; i < listOfElements.length; i++) {
        listOfElements[i].style.animation = `opacityanim 1s cubic-bezier(.22,.53,.51,.82) forwards`;
        listOfElements[i].style.animationDelay = `${i * 0.3}s`;
    }
}

function sort(servicetype) {
    if (servicetype == "tailles") {
        servicescontainer.innerHTML = tailles.outerHTML + abattage.outerHTML + haubanage.outerHTML + broyage.outerHTML + entretien.outerHTML
        animatecards()
    }

    if (servicetype == "abattage") {
        servicescontainer.innerHTML = abattage.outerHTML + tailles.outerHTML + haubanage.outerHTML + broyage.outerHTML + entretien.outerHTML
        animatecards()
    }

    if (servicetype == "haubanage") {
        servicescontainer.innerHTML = haubanage.outerHTML + tailles.outerHTML + abattage.outerHTML + broyage.outerHTML + entretien.outerHTML
        animatecards()
    }

    if (servicetype == "broyage") {
        servicescontainer.innerHTML = broyage.outerHTML + tailles.outerHTML + abattage.outerHTML + haubanage.outerHTML + entretien.outerHTML
        animatecards()
    }

    if (servicetype == "entretien") {
        servicescontainer.innerHTML = entretien.outerHTML + tailles.outerHTML + abattage.outerHTML + haubanage.outerHTML + broyage.outerHTML
        animatecards()
    }
}

navbartailles.addEventListener("click", function(){sort("tailles")})
navbarabattage.addEventListener("click", function(){sort("abattage")})
navbarhaubanage.addEventListener("click", function(){sort("haubanage")})
navbarbroyage.addEventListener("click", function(){sort("broyage")})
navbarentretien.addEventListener("click", function(){sort("entretien")})