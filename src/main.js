let navMenu = document.getElementById("navMenu")
let navClose = document.getElementById("navClose")
let navHamburger = document.getElementById("navHamburger")


navHamburger.onclick = function (){
    navMenu.classList.remove('hidden')
}

navClose.onclick = function (){
    navMenu.classList.add('hidden')
}