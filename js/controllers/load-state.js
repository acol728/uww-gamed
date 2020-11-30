import games from "../data/games.js";
import members from "../data/members.js";
import $ from "../modules/helpers.js";
import createCredits from "../modules/cards/create-credits.js";

const gamePage = $("game-page");
const galleryPage = $("gallery-page");

function loadGame(gameID) {
    clearGameData();
    const game = games.find(el => el.id == gameID);
    
    $("game-name").innerText = game.title;
    $("release-date").innerText = game.releaseDate;
    $("price").innerText = "$" + game.price.toFixed(2);

    game.paragraphs.forEach(el => {
        const p = document.createElement("p");
        p.setAttribute("class", "paragraph");
        p.innerText = el;
        $("game-paragraphs").appendChild(p);
    })

    game.links.forEach(el => {
        const a = document.createElement("a");
        a.setAttribute("href", el.src);
        a.setAttribute("target", "_blank");
        a.appendChild(document.createTextNode(el.display));
        $("external-links").appendChild(a);
        $("external-links").appendChild(document.createElement("br"));
    });

    game.authors.forEach(author => {
        const member = members.find(el => el.name == author);
        const roles = member.games.find(el => el.title == game.title).roles;
        $("credits-list").appendChild(createCredits({
            name: member.name,
            twitter: member.twitter,
            roles
        }));
    });

    changeSubPage("artwork");

    galleryPage.style.display = "none";
    gamePage.style.display = "block";
    $("container").scrollIntoView();
}

export default loadGame;

function clearGameData() {
    while ($("game-paragraphs").firstChild)
        $("game-paragraphs").removeChild($("game-paragraphs").firstChild);

    while ($("external-links").firstChild)
        $("external-links").removeChild($("external-links").firstChild);

    while ($("credits-list").firstChild)
        $("credits-list").removeChild($("credits-list").firstChild);
}

Array.from(document.querySelectorAll(".card")).forEach((el) => {
    el.addEventListener("click", (e) => {
        loadGame(e.target.parentElement.dataset.id);
    });
});

$("back-button").addEventListener("click", () => {
    gamePage.style.display = "none";
    galleryPage.style.display = "block";
});

$("artwork-button").addEventListener("click", () => {
    changeSubPage("artwork");
});

$("music-button").addEventListener("click", () => {
    changeSubPage("music");
});

$("credits-button").addEventListener("click", () => {
    changeSubPage("credits");
});

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