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


let toggleStatus = 1;
function toggleMenu() {
    if (toggleStatus == 1) { 
        mobileMenu.style.display = "flex"
         toggleStatus = 0;
    } else if (toggleStatus == 0) {
        toggleStatus = 1;
        mobileMenu.style.display = "none"
    }
}
