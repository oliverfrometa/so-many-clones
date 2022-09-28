const navBackground = document.querySelector("nav")
window.onscroll = () => {
    let top = window.scrollY;
    if (top >= 50) {
        navBackground.classList.add("active")
    } else {
        navBackground.classList.remove("active")
    }
}

const ahrBtn = document.querySelector(".about-humanrace")
const ahrContainer = document.querySelector(".about-humanrace-container")
ahrBtn.addEventListener("mouseover", () => {
    ahrContainer.classList.add("active")
    navBackground.classList.add("active")

    if (ahrContainer.classList.contains("active")) {
        ahrContainer.addEventListener("mouseout", () => {
            ahrContainer.classList.remove("active")
            navBackground.classList.remove("active")
        })
    }
})

const burger = document.querySelector(".burger")
const mobileMenu = document.querySelector("#mobile-menu")
const setsandkits = document.querySelector("#setsandkits")
let toggleMenuStatus = true;
function toggleMenu() {
    if (toggleMenuStatus == true) { 
        mobileMenu.style.display = "flex"
         toggleMenuStatus = false;
    } else if (toggleMenuStatus == false) {
        toggleMenuStatus = true;
        mobileMenu.style.display = "none"
    }
}


// ------------------------------------------ MOBILE MENU

// const setsandkitsBtn = document.querySelector("#setsandkits-btn")
// const skincareBtn = document.querySelector("#skincare-btn")
// const bodycareBtn = document.querySelector("#bodycare-btn")
// const adidasBtn = document.querySelector("#adidas-btn")
// const ceramicsBtn = document.querySelector("#ceramics-btn")
// const abouthumanraceBtn = document.querySelector("#abouthumanrace-btn")

const setsandkitsSubmenu = document.querySelector("#setsandkits-submenu")
const skincareSubmenu = document.querySelector("#skincare-submenu")
const bodycareSubmenu = document.querySelector("#bodycare-submenu")
const suncareSubmenu = document.querySelector("#suncare-submenu")
const adidasSubmenu = document.querySelector("#adidas-submenu")
const ceramicsSubmenu = document.querySelector("#ceramics-submenu")
const abouthumanraceSubmenu = document.querySelector("#abouthumanrace-submenu")

// sets and kits

let setsandkitsStatus = true;
function toggleSetsandkits() {
    if (setsandkitsStatus == true) { 
        setsandkitsSubmenu.style.display = "flex"
         setsandkitsStatus = false;
    } else if (setsandkitsStatus == false) {
        setsandkitsStatus = true;
        setsandkitsSubmenu.style.display = "none"
    }
}

let skincareStatus = true;
function toggleSkincare() {
    if (skincareStatus == true) { 
        skincareSubmenu.style.display = "flex"
         skincareStatus = false;
    } else if (skincareStatus == false) {
        skincareStatus = true;
        skincareSubmenu.style.display = "none"
    }
}

let bodycareStatus = true;
function toggleBodycare() {
    if (bodycareStatus == true) { 
        bodycareSubmenu.style.display = "flex"
         bodycareStatus = false;
    } else if (bodycareStatus == false) {
        bodycareStatus = true;
        bodycareSubmenu.style.display = "none"
    }
}

let adidasStatus = true;
function toggleAdidas() {
    if (adidasStatus == true) { 
        adidasSubmenu.style.display = "flex"
         adidasStatus = false;
    } else if (adidasStatus == false) {
        adidasStatus = true;
        adidasSubmenu.style.display = "none"
    }
}

let suncareStatus = true;
function toggleSuncare() {
    if (suncareStatus == true) { 
        suncareSubmenu.style.display = "flex"
         suncareStatus = false;
    } else if (suncareStatus == false) {
        suncareStatus = true;
        suncareSubmenu.style.display = "none"
    }
}

let ceramicsStatus = true;
function toggleCeramics() {
    if (ceramicsStatus == true) { 
        ceramicsSubmenu.style.display = "flex"
         ceramicsStatus = false;
    } else if (ceramicsStatus == false) {
        ceramicsStatus = true;
        ceramicsSubmenu.style.display = "none"
    }
}



// ------------------------------------------


const bag = document.querySelector("#bag")
const accountBtn = document.querySelector("#account-btn")
let toggleBagStatus = true;
function toggleBag() {
    if (toggleBagStatus == true) { 
        bag.style.display = "flex";
         toggleBagStatus = false;
    } else if (toggleBagStatus == false) {
        toggleBagStatus = true;
        bag.style.display = "none";
    }
}