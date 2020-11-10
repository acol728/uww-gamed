import $ from "../modules/helpers.js";

const gamePage = $("game-page");
const galleryPage = $("gallery-page");

function loadGame() {
    galleryPage.style.display = "none";
    gamePage.style.display = "block";
}

Array.from(document.querySelectorAll(".card")).forEach((el) => {
    el.addEventListener("click", loadGame);
});

$("back-button").addEventListener("click", () => {
    gamePage.style.display = "none";
    galleryPage.style.display = "block";
})

$("artwork-button").addEventListener("click", () => {
    changeSubPage("artwork");
})

$("music-button").addEventListener("click", () => {
    changeSubPage("music");
})

$("credits-button").addEventListener("click", () => {
    changeSubPage("credits");
})

function changeSubPage(type) {
    const pages = document.getElementsByClassName("sub-state");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    $(type + "-sub-state").style.display = "block";
    
    const buttons = document.getElementsByClassName("sub-nav-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("sub-nav-active");
    }
    $(type + "-button").classList.add("sub-nav-active");

    $(type + "-sub-state").scrollIntoView({behavior: 'smooth'});
}